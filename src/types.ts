export interface EssentialItem {
  id: string;
  num: string;
  badge?: string;
  title: string;
  desc: string;
  accent?: string;
  isCustomCard?: boolean;
}

export interface JourneyStep {
  step: string;
  label: string;
  role: string;
  isGoal?: boolean;
}

export interface TestimonialItem {
  id: string;
  tag: string;
  category: string;
  quote: string;
  author: string;
  role: string;
  status: string;
  accentColor: string;
}

export interface AwardItem {
  id: string;
  tag: string;
  location: string;
  title: string;
  description: string;
  institution: string;
  isFeatured?: boolean;
  accentColor?: string;
}

export interface ProcessPhase {
  num: string;
  title: string;
  desc: string;
  tag: string;
  accent?: string;
}
