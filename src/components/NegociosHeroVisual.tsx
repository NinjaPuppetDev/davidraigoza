import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NegociosHeroVisualProps {
  mockupId?: string;
}

export default function NegociosHeroVisual({ mockupId = 'hero-browser-mockup' }: NegociosHeroVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Accessibility & Viewport Check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 2. Scene, Perspective Camera, and WebGL Renderer
    const scene = new THREE.Scene();

    const getDimensions = () => {
      const w = container.clientWidth || window.innerWidth || 1000;
      const h = container.clientHeight || 650;
      return { w, h };
    };

    const { w: initialWidth, h: initialHeight } = getDimensions();
    const isInitialMobile = initialWidth < 768;

    const camera = new THREE.PerspectiveCamera(38, initialWidth / initialHeight, 0.1, 50);
    camera.position.set(0, 0, isInitialMobile ? 13.5 : 11);
    camera.lookAt(0, 0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
    } catch {
      return;
    }

    const getTargetDpr = (width: number) =>
      Math.min(window.devicePixelRatio || 1, width < 768 ? 1.5 : 2);

    renderer.setPixelRatio(getTargetDpr(initialWidth));
    renderer.setSize(initialWidth, initialHeight);
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);

    // Master Hierarchy
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Motion Hierarchy Groups: Depth separation
    const backgroundPlanesGroup = new THREE.Group(); // Deepest layer (Z ~ -1.5)
    const midgroundPlanesGroup = new THREE.Group();  // Mid layer (Z ~ -0.7)
    const foregroundGuidesGroup = new THREE.Group(); // Precision datum guides (Z ~ 0)
    const dynamicScannerGroup = new THREE.Group();   // Active scanning axis (Z ~ 0.05)

    masterGroup.add(backgroundPlanesGroup);
    masterGroup.add(midgroundPlanesGroup);
    masterGroup.add(foregroundGuidesGroup);
    masterGroup.add(dynamicScannerGroup);

    // 3. Dynamic Centered Stage Projection in 3D Space
    const getCenteredFallbackBounds = (widthPx: number) => {
      const mobile = widthPx < 768;
      const halfW = mobile ? 1.15 : 1.9;
      const halfH = mobile ? 1.25 : 1.45;
      return {
        left: -halfW,
        right: halfW,
        top: halfH,
        bottom: -halfH,
        centerX: 0,
        centerY: 0,
        width: halfW * 2,
        height: halfH * 2,
      };
    };

    const getMockupWorldBounds = () => {
      const mockupEl = document.getElementById(mockupId);
      const widthPx = container.clientWidth || window.innerWidth || 1000;

      if (!mockupEl || !container) {
        return getCenteredFallbackBounds(widthPx);
      }

      const mRect = mockupEl.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();

      if (cRect.width < 10 || cRect.height < 10) {
        return getCenteredFallbackBounds(widthPx);
      }

      const normLeft = ((mRect.left - cRect.left) / cRect.width) * 2 - 1;
      const normRight = ((mRect.right - cRect.left) / cRect.width) * 2 - 1;
      const normTop = -(((mRect.top - cRect.top) / cRect.height) * 2 - 1);
      const normBottom = -(((mRect.bottom - cRect.top) / cRect.height) * 2 - 1);

      const halfFovRad = THREE.MathUtils.degToRad(camera.fov / 2);
      const visibleHalfHeight = Math.tan(halfFovRad) * camera.position.z;
      const visibleHalfWidth = visibleHalfHeight * camera.aspect;

      const rawLeft = normLeft * visibleHalfWidth;
      const rawRight = normRight * visibleHalfWidth;
      const rawTop = normTop * visibleHalfHeight;
      const rawBottom = normBottom * visibleHalfHeight;

      const rawWidth = rawRight - rawLeft;
      const rawHeight = rawTop - rawBottom;

      if (Math.abs(rawWidth) < 0.5 || Math.abs(rawHeight) < 0.5) {
        return getCenteredFallbackBounds(widthPx);
      }

      // On mobile viewports, constrain the world width so flanking cubes and datum lines stay inside the screen
      const isMobileView = widthPx < 768;
      const maxAllowedWidth = isMobileView ? visibleHalfWidth * 1.18 : visibleHalfWidth * 1.35;
      const clampedWidth = Math.min(rawWidth, maxAllowedWidth);
      const centerX = (rawLeft + rawRight) / 2;
      const centerY = (rawTop + rawBottom) / 2;

      return {
        left: centerX - clampedWidth / 2,
        right: centerX + clampedWidth / 2,
        top: rawTop,
        bottom: rawBottom,
        centerX,
        centerY,
        width: clampedWidth,
        height: rawHeight,
      };
    };

    // Contemporary Bauhaus Study Palette: 55% Cobalt Blue, 30% Cadmium Yellow, 10% Red, 5% Ink Black
    const colBrandBlue = new THREE.Color(0x2563eb);
    const colBrandLight = new THREE.Color(0x3b82f6);
    const colBauhausYellow = new THREE.Color(0xffe600);
    const colBauhausYellowBorder = new THREE.Color(0xd4a300);
    const colBauhausRed = new THREE.Color(0xef4444);
    const colBauhausRedBorder = new THREE.Color(0xdc2626);
    const colBauhausInk = new THREE.Color(0x121210);
    const colSlate = new THREE.Color(0x475569);

    // Resource disposables tracker
    const disposables: { geometry: THREE.BufferGeometry; material: THREE.Material }[] = [];

    // Helper: Create a 3D architectural cube/box with wireframe edge definition
    const createArchitecturalCube = (
      width: number,
      height: number,
      depth: number,
      fillColor: THREE.Color,
      fillOpacity: number,
      strokeColor: THREE.Color,
      strokeOpacity: number,
      zPos: number,
      rotX = -0.09,
      rotY = 0.14
    ) => {
      const group = new THREE.Group();

      const geom = new THREE.BoxGeometry(width, height, depth);
      const fillMat = new THREE.MeshBasicMaterial({
        color: fillColor,
        transparent: true,
        opacity: fillOpacity,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geom, fillMat);
      group.add(mesh);
      disposables.push({ geometry: geom, material: fillMat });

      const edgeGeom = new THREE.EdgesGeometry(geom);
      const strokeMat = new THREE.LineBasicMaterial({
        color: strokeColor,
        transparent: true,
        opacity: strokeOpacity,
        depthWrite: false,
      });
      const strokeMesh = new THREE.LineSegments(edgeGeom, strokeMat);
      group.add(strokeMesh);
      disposables.push({ geometry: edgeGeom, material: strokeMat });

      group.position.z = zPos;
      group.rotation.x = rotX;
      group.rotation.y = rotY;
      return group;
    };

    // Dynamic Elements References for the Animation Loop
    let primarySledCube: THREE.Group | null = null;
    let rightColumnCube: THREE.Group | null = null;
    let leftFlankCube: THREE.Group | null = null;
    let baselineTrackCube: THREE.Group | null = null;
    let scannerRedCube: THREE.Group | null = null;
    let caliperRedCube: THREE.Group | null = null;
    let datumBlackCube: THREE.Group | null = null;
    let registrationBlackCube: THREE.Group | null = null;

    let scannerAxisGroup: THREE.Group | null = null;
    let telescopingTopLineGeom: THREE.BufferGeometry | null = null;
    let telescopingTopLineArray: Float32Array | null = null;
    let telescopingBaseLineGeom: THREE.BufferGeometry | null = null;
    let telescopingBaseLineArray: Float32Array | null = null;
    let caliperLineGeom: THREE.BufferGeometry | null = null;
    let caliperLineArray: Float32Array | null = null;
    let cornerBracketsGroup: THREE.Group | null = null;

    const clearGroup = (g: THREE.Group) => {
      while (g.children.length > 0) {
        g.remove(g.children[0]);
      }
    };

    const buildSystem = (b: ReturnType<typeof getMockupWorldBounds>) => {
      clearGroup(backgroundPlanesGroup);
      clearGroup(midgroundPlanesGroup);
      clearGroup(foregroundGuidesGroup);
      clearGroup(dynamicScannerGroup);

      disposables.forEach((d) => {
        d.geometry.dispose();
        d.material.dispose();
      });
      disposables.length = 0;

      // 1. 55% BLUE (Centered Primary Sled + Balanced Right Architectural Column)
      const sledWidth = b.width * 1.18;
      const sledHeight = b.height * 1.14;
      const sledDepth = 0.75;
      primarySledCube = createArchitecturalCube(
        sledWidth,
        sledHeight,
        sledDepth,
        colBrandBlue,
        0.09,
        colBrandBlue,
        0.46,
        -1.5,
        -0.08,
        0.12
      );
      primarySledCube.position.set(b.centerX, b.centerY, -1.5);
      backgroundPlanesGroup.add(primarySledCube);

      const sledSubGeom = new THREE.BufferGeometry();
      const sledSubVerts = new Float32Array([
        -sledWidth * 0.2, -sledHeight / 2, 0, -sledWidth * 0.2, sledHeight / 2, 0,
        sledWidth * 0.2, -sledHeight / 2, 0, sledWidth * 0.2, sledHeight / 2, 0,
      ]);
      sledSubGeom.setAttribute('position', new THREE.BufferAttribute(sledSubVerts, 3));
      const sledSubMat = new THREE.LineBasicMaterial({
        color: colBrandLight,
        transparent: true,
        opacity: 0.24,
        depthWrite: false,
      });
      const sledSubLines = new THREE.LineSegments(sledSubGeom, sledSubMat);
      primarySledCube.add(sledSubLines);
      disposables.push({ geometry: sledSubGeom, material: sledSubMat });

      const colWidth = b.width * 0.32;
      const colHeight = b.height * 1.18;
      const colDepth = 0.85;
      rightColumnCube = createArchitecturalCube(
        colWidth,
        colHeight,
        colDepth,
        colBrandBlue,
        0.12,
        colBrandBlue,
        0.52,
        -0.6,
        -0.09,
        0.15
      );
      rightColumnCube.position.set(b.right + colWidth * 0.32, b.centerY, -0.6);
      midgroundPlanesGroup.add(rightColumnCube);

      const colGridGeom = new THREE.BufferGeometry();
      const colGridVerts = new Float32Array([
        -colWidth / 2, colHeight * 0.35, 0, colWidth / 2, colHeight * 0.35, 0,
        -colWidth / 2, -colHeight * 0.35, 0, colWidth / 2, -colHeight * 0.35, 0,
      ]);
      colGridGeom.setAttribute('position', new THREE.BufferAttribute(colGridVerts, 3));
      const colGridMat = new THREE.LineBasicMaterial({
        color: colBrandLight,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
      });
      const colGridLines = new THREE.LineSegments(colGridGeom, colGridMat);
      rightColumnCube.add(colGridLines);
      disposables.push({ geometry: colGridGeom, material: colGridMat });

      // 2. 30% YELLOW (Balanced Left Flank + Centered Baseline Track)
      const subWidth = b.width * 0.32;
      const subHeight = b.height * 0.54;
      const subDepth = 0.65;
      leftFlankCube = createArchitecturalCube(
        subWidth,
        subHeight,
        subDepth,
        colBauhausYellow,
        0.15,
        colBauhausYellowBorder,
        0.55,
        -0.85,
        -0.09,
        0.14
      );
      leftFlankCube.position.set(b.left - subWidth * 0.32, b.bottom + subHeight * 0.48, -0.85);
      backgroundPlanesGroup.add(leftFlankCube);

      const subRatioGeom = new THREE.BufferGeometry();
      const subRatioVerts = new Float32Array([
        -subWidth / 2, subHeight * 0.12, 0, subWidth / 2, subHeight * 0.12, 0,
      ]);
      subRatioGeom.setAttribute('position', new THREE.BufferAttribute(subRatioVerts, 3));
      const subRatioMat = new THREE.LineBasicMaterial({
        color: colBauhausYellowBorder,
        transparent: true,
        opacity: 0.32,
        depthWrite: false,
      });
      const subRatioLines = new THREE.LineSegments(subRatioGeom, subRatioMat);
      leftFlankCube.add(subRatioLines);
      disposables.push({ geometry: subRatioGeom, material: subRatioMat });

      const ribbonWidth = b.width * 1.12;
      const ribbonHeight = 0.40;
      const ribbonDepth = 0.60;
      baselineTrackCube = createArchitecturalCube(
        ribbonWidth,
        ribbonHeight,
        ribbonDepth,
        colBauhausYellow,
        0.14,
        colBauhausYellowBorder,
        0.52,
        -0.45,
        -0.08,
        0.12
      );
      baselineTrackCube.position.set(b.centerX, b.bottom - 0.26, -0.45);
      midgroundPlanesGroup.add(baselineTrackCube);

      const trackAxisGeom = new THREE.BufferGeometry();
      const trackAxisVerts = new Float32Array([
        -ribbonWidth / 2, 0, 0, ribbonWidth / 2, 0, 0,
      ]);
      trackAxisGeom.setAttribute('position', new THREE.BufferAttribute(trackAxisVerts, 3));
      const trackAxisMat = new THREE.LineBasicMaterial({
        color: colBauhausYellowBorder,
        transparent: true,
        opacity: 0.30,
        depthWrite: false,
      });
      const trackAxisLines = new THREE.LineSegments(trackAxisGeom, trackAxisMat);
      baselineTrackCube.add(trackAxisLines);
      disposables.push({ geometry: trackAxisGeom, material: trackAxisMat });

      // 3. 10% RED
      const scanCubeSize = 0.28;
      scannerRedCube = createArchitecturalCube(
        scanCubeSize,
        scanCubeSize,
        scanCubeSize,
        colBauhausRed,
        0.38,
        colBauhausRedBorder,
        0.65,
        0.15,
        -0.10,
        0.18
      );
      scannerRedCube.position.set(b.centerX, b.top + 0.12, 0.15);
      dynamicScannerGroup.add(scannerRedCube);

      const caliperCubeW = 0.30;
      const caliperCubeH = 0.22;
      const caliperCubeD = 0.28;
      caliperRedCube = createArchitecturalCube(
        caliperCubeW,
        caliperCubeH,
        caliperCubeD,
        colBauhausRed,
        0.34,
        colBauhausRedBorder,
        0.62,
        0.05,
        -0.08,
        0.16
      );
      caliperRedCube.position.set(b.right + colWidth * 0.16, b.centerY, 0.05);
      foregroundGuidesGroup.add(caliperRedCube);

      // 4. 5% BLACK (Symmetrically anchored datum & registration cubes)
      const datumCubeSize = 0.18;
      datumBlackCube = createArchitecturalCube(
        datumCubeSize,
        datumCubeSize,
        datumCubeSize,
        colBauhausInk,
        0.45,
        colBauhausInk,
        0.68,
        0.22,
        -0.10,
        0.15
      );
      datumBlackCube.position.set(b.left - 0.35, b.bottom, 0.22);
      foregroundGuidesGroup.add(datumBlackCube);

      const regCubeSize = 0.16;
      registrationBlackCube = createArchitecturalCube(
        regCubeSize,
        regCubeSize,
        regCubeSize,
        colBauhausInk,
        0.45,
        colBauhausInk,
        0.68,
        0.18,
        -0.08,
        0.14
      );
      registrationBlackCube.position.set(b.right + 0.35, b.bottom, 0.18);
      foregroundGuidesGroup.add(registrationBlackCube);

      // 5. GUIDES (Symmetrically balanced around b.left and b.right)
      scannerAxisGroup = new THREE.Group();
      scannerAxisGroup.position.set(b.centerX, 0, 0.08);

      const scanGeom = new THREE.BufferGeometry();
      const scanSpan = b.height * 1.25;
      const tSerif = 0.18;
      const scanVerts = new Float32Array([
        0, -scanSpan / 2, 0, 0, scanSpan / 2, 0,
        -tSerif, scanSpan / 2, 0, tSerif, scanSpan / 2, 0,
        -tSerif, -scanSpan / 2, 0, tSerif, -scanSpan / 2, 0,
        -tSerif * 0.5, 0, 0, tSerif * 0.5, 0, 0,
      ]);
      scanGeom.setAttribute('position', new THREE.BufferAttribute(scanVerts, 3));
      const scanMat = new THREE.LineBasicMaterial({
        color: colBrandLight,
        transparent: true,
        opacity: 0.48,
        depthWrite: false,
      });
      const scanMesh = new THREE.LineSegments(scanGeom, scanMat);
      scannerAxisGroup.add(scanMesh);
      dynamicScannerGroup.add(scannerAxisGroup);
      disposables.push({ geometry: scanGeom, material: scanMat });

      const topOverhang = b.width * 0.22;
      telescopingTopLineArray = new Float32Array([
        b.left - topOverhang, b.top, 0, b.right + topOverhang, b.top, 0,
        b.left - topOverhang, b.top - 0.07, 0, b.left - topOverhang, b.top + 0.07, 0,
        b.right + topOverhang, b.top - 0.07, 0, b.right + topOverhang, b.top + 0.07, 0,
      ]);
      telescopingTopLineGeom = new THREE.BufferGeometry();
      telescopingTopLineGeom.setAttribute('position', new THREE.BufferAttribute(telescopingTopLineArray, 3));
      const topLineMat = new THREE.LineBasicMaterial({
        color: colBauhausInk,
        transparent: true,
        opacity: 0.32,
        depthWrite: false,
      });
      const topLineMesh = new THREE.LineSegments(telescopingTopLineGeom, topLineMat);
      foregroundGuidesGroup.add(topLineMesh);
      disposables.push({ geometry: telescopingTopLineGeom, material: topLineMat });

      const baseOverhang = b.width * 0.34;
      const midTick = b.width * 0.18;
      telescopingBaseLineArray = new Float32Array([
        b.left - baseOverhang, b.bottom, 0, b.right + baseOverhang, b.bottom, 0,
        b.left, b.bottom - 0.09, 0, b.left, b.bottom + 0.09, 0,
        b.right, b.bottom - 0.09, 0, b.right, b.bottom + 0.09, 0,
        b.left - midTick, b.bottom - 0.06, 0, b.left - midTick, b.bottom + 0.06, 0,
        b.right + midTick, b.bottom - 0.06, 0, b.right + midTick, b.bottom + 0.06, 0,
        b.right + baseOverhang, b.bottom - 0.09, 0, b.right + baseOverhang, b.bottom + 0.09, 0,
      ]);
      telescopingBaseLineGeom = new THREE.BufferGeometry();
      telescopingBaseLineGeom.setAttribute('position', new THREE.BufferAttribute(telescopingBaseLineArray, 3));
      const baseLineMat = new THREE.LineBasicMaterial({
        color: colBauhausInk,
        transparent: true,
        opacity: 0.36,
        depthWrite: false,
      });
      const baseLineMesh = new THREE.LineSegments(telescopingBaseLineGeom, baseLineMat);
      foregroundGuidesGroup.add(baseLineMesh);
      disposables.push({ geometry: telescopingBaseLineGeom, material: baseLineMat });

      const caliperSpan = colWidth * 0.65;
      caliperLineArray = new Float32Array([
        b.right, b.centerY, 0.05, b.right + caliperSpan, b.centerY, 0.05,
        b.right, b.centerY - 0.1, 0.05, b.right, b.centerY + 0.1, 0.05,
        b.right + caliperSpan, b.centerY - 0.1, 0.05, b.right + caliperSpan, b.centerY + 0.1, 0.05,
      ]);
      caliperLineGeom = new THREE.BufferGeometry();
      caliperLineGeom.setAttribute('position', new THREE.BufferAttribute(caliperLineArray, 3));
      const caliperMat = new THREE.LineBasicMaterial({
        color: colBrandBlue,
        transparent: true,
        opacity: 0.44,
        depthWrite: false,
      });
      const caliperMesh = new THREE.LineSegments(caliperLineGeom, caliperMat);
      foregroundGuidesGroup.add(caliperMesh);
      disposables.push({ geometry: caliperLineGeom, material: caliperMat });

      cornerBracketsGroup = new THREE.Group();
      const arm = 0.22;
      const cOff = 0.08;
      const cornerVerts = new Float32Array([
        b.left - cOff, b.top + cOff, 0.04, b.left - cOff + arm, b.top + cOff, 0.04,
        b.left - cOff, b.top + cOff, 0.04, b.left - cOff, b.top + cOff - arm, 0.04,
        b.right + cOff, b.top + cOff, 0.04, b.right + cOff - arm, b.top + cOff, 0.04,
        b.right + cOff, b.top + cOff, 0.04, b.right + cOff, b.top + cOff - arm, 0.04,
        b.left - cOff, b.bottom - cOff, 0.04, b.left - cOff + arm, b.bottom - cOff, 0.04,
        b.left - cOff, b.bottom - cOff, 0.04, b.left - cOff, b.bottom - cOff + arm, 0.04,
        b.right + cOff, b.bottom - cOff, 0.04, b.right + cOff - arm, b.bottom - cOff, 0.04,
        b.right + cOff, b.bottom - cOff, 0.04, b.right + cOff, b.bottom - cOff + arm, 0.04,
      ]);
      const cornerGeom = new THREE.BufferGeometry();
      cornerGeom.setAttribute('position', new THREE.BufferAttribute(cornerVerts, 3));
      const cornerMat = new THREE.LineBasicMaterial({
        color: colBauhausInk,
        transparent: true,
        opacity: 0.42,
        depthWrite: false,
      });
      const cornerMesh = new THREE.LineSegments(cornerGeom, cornerMat);
      cornerBracketsGroup.add(cornerMesh);
      foregroundGuidesGroup.add(cornerBracketsGroup);
      disposables.push({ geometry: cornerGeom, material: cornerMat });

      const leftAxisGeom = new THREE.BufferGeometry();
      const leftAxisVerts = new Float32Array([
        b.left, b.bottom - 0.6, 0, b.left, b.top + 0.6, 0,
        b.left - 0.08, b.top + 0.6, 0, b.left + 0.08, b.top + 0.6, 0,
        b.left - 0.08, b.bottom - 0.6, 0, b.left + 0.08, b.bottom - 0.6, 0,
      ]);
      leftAxisGeom.setAttribute('position', new THREE.BufferAttribute(leftAxisVerts, 3));
      const leftAxisMat = new THREE.LineBasicMaterial({
        color: colSlate,
        transparent: true,
        opacity: 0.24,
        depthWrite: false,
      });
      const leftAxisMesh = new THREE.LineSegments(leftAxisGeom, leftAxisMat);
      foregroundGuidesGroup.add(leftAxisMesh);
      disposables.push({ geometry: leftAxisGeom, material: leftAxisMat });
    };

    let currentBounds = getMockupWorldBounds();
    buildSystem(currentBounds);

    // 4. Cursor Interaction and Mockup Hover State
    let mouseActive = false;
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let mouseCurrentX = 0;
    let mouseCurrentY = 0;

    let isHoveringMockup = false;
    let hoverProgress = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseActive = true;
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseTargetX = THREE.MathUtils.clamp(x, -1, 1);
      mouseTargetY = THREE.MathUtils.clamp(y, -1, 1);
    };

    const handleMouseLeave = () => {
      mouseActive = false;
      mouseTargetX = 0;
      mouseTargetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const mockupEl = document.getElementById(mockupId);
    const onMockupEnter = () => {
      isHoveringMockup = true;
    };
    const onMockupLeave = () => {
      isHoveringMockup = false;
    };

    if (mockupEl) {
      mockupEl.addEventListener('mouseenter', onMockupEnter);
      mockupEl.addEventListener('mouseleave', onMockupLeave);
    }

    // 5. Visibility and Throttled Window/Element Resize Handlers
    let isVisibleOnScreen = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleOnScreen = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let lastWidth = initialWidth;
    let lastHeight = initialHeight;
    let resizeRafId: number | null = null;

    const performResize = () => {
      resizeRafId = null;
      if (!container) return;
      const { w: newWidth, h: newHeight } = getDimensions();

      // Ignore tiny mobile URL-bar vertical jitters if width hasn't changed
      if (Math.abs(newWidth - lastWidth) < 2 && Math.abs(newHeight - lastHeight) < 24) {
        return;
      }
      lastWidth = newWidth;
      lastHeight = newHeight;

      camera.position.z = newWidth < 768 ? 13.5 : 11;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(getTargetDpr(newWidth));
      renderer.setSize(newWidth, newHeight);

      currentBounds = getMockupWorldBounds();
      buildSystem(currentBounds);

      if (prefersReducedMotion) {
        renderer.render(scene, camera);
      }
    };

    const scheduleResize = () => {
      if (resizeRafId !== null) return;
      resizeRafId = requestAnimationFrame(performResize);
    };

    window.addEventListener('resize', scheduleResize, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        scheduleResize();
      });
      resizeObserver.observe(container);
      if (mockupEl) {
        resizeObserver.observe(mockupEl);
      }
    }

    // 6. Deliberate Architectural Motion Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisibleOnScreen) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const t = clock.getElapsedTime();

      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      const targetX = mouseActive ? mouseTargetX : 0;
      const targetY = mouseActive ? mouseTargetY : 0;
      mouseCurrentX += (targetX - mouseCurrentX) * 0.025;
      mouseCurrentY += (targetY - mouseCurrentY) * 0.025;

      const targetHover = isHoveringMockup ? 1 : 0;
      hoverProgress += (targetHover - hoverProgress) * 0.04;

      masterGroup.rotation.y = mouseCurrentX * 0.018;
      masterGroup.rotation.x = -mouseCurrentY * 0.012;
      masterGroup.position.x = mouseCurrentX * 0.04;
      masterGroup.position.y = mouseCurrentY * 0.025;

      backgroundPlanesGroup.position.x = -mouseCurrentX * 0.025;
      backgroundPlanesGroup.position.y = -mouseCurrentY * 0.015;
      midgroundPlanesGroup.position.x = mouseCurrentX * 0.015;
      midgroundPlanesGroup.position.y = mouseCurrentY * 0.01;
      foregroundGuidesGroup.position.x = mouseCurrentX * 0.008;
      foregroundGuidesGroup.position.y = mouseCurrentY * 0.005;

      const b = currentBounds;
      const colW = b.width * 0.32;
      const subW = b.width * 0.32;
      const subH = b.height * 0.54;

      // 1. Primary Blue Foundation Sled (Slow Ambient Drift)
      if (primarySledCube) {
        const sledCycle = Math.sin(t * 0.16);
        const sledTravel = b.width * 0.045 * (1 - hoverProgress * 0.35);
        primarySledCube.position.x = b.centerX + sledCycle * sledTravel + mouseCurrentX * 0.05;
        primarySledCube.position.y = b.centerY + Math.cos(t * 0.12) * 0.025;
        primarySledCube.rotation.y = 0.12 + Math.sin(t * 0.10) * 0.008;
        primarySledCube.rotation.x = -0.08 + Math.cos(t * 0.11) * 0.005;
      }

      // 2. Right Modular Blue Column (Gentle Vertical Sub-Harmonic)
      let currentColX = b.right + colW * 0.32;
      if (rightColumnCube) {
        const colVerticalCycle = Math.sin(t * 0.18 + 0.8);
        const colTravel = b.height * 0.05 * (1 - hoverProgress * 0.3);
        currentColX = b.right + colW * 0.32 + Math.cos(t * 0.12) * 0.03;
        rightColumnCube.position.x = currentColX;
        rightColumnCube.position.y = b.centerY + colVerticalCycle * colTravel;
        rightColumnCube.rotation.y = 0.15 + Math.cos(t * 0.11) * 0.008;
        rightColumnCube.rotation.x = -0.09 + Math.sin(t * 0.09) * 0.005;
      }

      // 3. Left-Flank Yellow Cube (Calm Ambient Floating)
      if (leftFlankCube) {
        const subCycleX = Math.sin(t * 0.14 + 2.2) * 0.04;
        const subCycleY = Math.cos(t * 0.16 + 1.0) * 0.035;
        leftFlankCube.position.x = b.left - subW * 0.32 + subCycleX;
        leftFlankCube.position.y = b.bottom + subH * 0.48 + subCycleY;
        leftFlankCube.rotation.y = 0.14 + Math.sin(t * 0.12) * 0.008;
        leftFlankCube.rotation.x = -0.09 + Math.cos(t * 0.10) * 0.005;
      }

      // 4. Baseline Yellow Track Runner Cube (Subtle Centered Gliding)
      if (baselineTrackCube) {
        const ribbonCycle = Math.cos(t * 0.13) * 0.10;
        baselineTrackCube.position.x = b.centerX + ribbonCycle;
        baselineTrackCube.rotation.y = 0.12 + Math.sin(t * 0.11) * 0.008;
        baselineTrackCube.rotation.x = -0.08 + Math.cos(t * 0.09) * 0.005;
      }

      // Secondary Volumetric Motion (Measured Atmospheric Scan)
      let currentScanX = b.centerX;
      if (scannerAxisGroup) {
        const scanPhase = Math.sin(t * 0.18);
        const ratio = 0.5 + 0.08 * scanPhase;
        const targetRatio = THREE.MathUtils.lerp(ratio, 0.45, hoverProgress);
        currentScanX = b.left + b.width * targetRatio;
        scannerAxisGroup.position.x = currentScanX;
      }

      if (scannerRedCube) {
        scannerRedCube.position.x = currentScanX;
        scannerRedCube.position.y = b.top + 0.12 + Math.sin(t * 0.22) * 0.015;
        scannerRedCube.rotation.y = 0.18 + Math.cos(t * 0.16) * 0.015;
        scannerRedCube.rotation.x = -0.10 + Math.sin(t * 0.14) * 0.01;
      }

      if (telescopingTopLineGeom && telescopingTopLineArray) {
        const topOverhang = b.width * 0.22;
        const extendCycle = 0.5 + 0.5 * Math.sin(t * 0.18);
        const currentRightExtend = b.right + topOverhang + extendCycle * 0.18;
        const currentLeftExtend = b.left - topOverhang - extendCycle * 0.18;
        telescopingTopLineArray[0] = currentLeftExtend;
        telescopingTopLineArray[3] = currentRightExtend;
        telescopingTopLineArray[6] = currentLeftExtend;
        telescopingTopLineArray[9] = currentLeftExtend;
        telescopingTopLineArray[12] = currentRightExtend;
        telescopingTopLineArray[15] = currentRightExtend;
        telescopingTopLineGeom.attributes.position.needsUpdate = true;
      }

      if (telescopingBaseLineGeom && telescopingBaseLineArray) {
        const baseOverhang = b.width * 0.34;
        const baseLeftExtend = b.left - baseOverhang - Math.sin(t * 0.14) * 0.08;
        const baseRightExtend = b.right + baseOverhang + Math.cos(t * 0.14) * 0.08;
        telescopingBaseLineArray[0] = baseLeftExtend;
        telescopingBaseLineArray[3] = baseRightExtend;
        telescopingBaseLineArray[30] = baseRightExtend;
        telescopingBaseLineArray[33] = baseRightExtend;
        telescopingBaseLineGeom.attributes.position.needsUpdate = true;
      }

      if (datumBlackCube) {
        datumBlackCube.position.x = b.left - 0.35 + Math.sin(t * 0.12) * 0.015;
        datumBlackCube.position.y = b.bottom;
        datumBlackCube.rotation.y = 0.15 + Math.sin(t * 0.1) * 0.005;
        datumBlackCube.rotation.x = -0.10;
      }
      if (registrationBlackCube) {
        registrationBlackCube.position.x = b.right + 0.35 + Math.cos(t * 0.11) * 0.015;
        registrationBlackCube.position.y = b.bottom;
        registrationBlackCube.rotation.y = 0.14 + Math.cos(t * 0.1) * 0.005;
        registrationBlackCube.rotation.x = -0.08;
      }

      const colOuterEdge = currentColX + colW * 0.32;
      if (caliperLineGeom && caliperLineArray) {
        caliperLineArray[3] = colOuterEdge;
        caliperLineArray[12] = colOuterEdge;
        caliperLineArray[15] = colOuterEdge;
        caliperLineGeom.attributes.position.needsUpdate = true;
      }

      if (caliperRedCube) {
        caliperRedCube.position.x = (b.right + colOuterEdge) * 0.5;
        caliperRedCube.position.y = b.centerY + Math.sin(t * 0.18 + 0.8) * 0.04;
        caliperRedCube.rotation.y = 0.16 + Math.sin(t * 0.14) * 0.012;
        caliperRedCube.rotation.x = -0.08 + Math.cos(t * 0.12) * 0.007;
      }

      if (cornerBracketsGroup) {
        const pulse = Math.sin(t * 0.25) * 0.005 * (1 - hoverProgress);
        cornerBracketsGroup.scale.set(1 + pulse, 1 + pulse, 1);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeRafId !== null) cancelAnimationFrame(resizeRafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', scheduleResize);
      observer.disconnect();
      if (resizeObserver) resizeObserver.disconnect();

      if (mockupEl) {
        mockupEl.removeEventListener('mouseenter', onMockupEnter);
        mockupEl.removeEventListener('mouseleave', onMockupLeave);
      }

      disposables.forEach((d) => {
        d.geometry.dispose();
        d.material.dispose();
      });

      renderer.dispose();
      renderer.forceContextLoss();
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, [mockupId]);

  return (
    <div
      ref={containerRef}
      id="negocios-hero-visual-canvas"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '-8rem',
        bottom: '-8rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        maxWidth: '100vw',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'visible',
      }}
    />
  );
}
