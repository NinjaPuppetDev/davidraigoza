/**
 * International (/us/) Configuration
 *
 * Central configuration file for the International English version.
 * Modify the values below to update external links, pricing, or contact info.
 */

export interface InternationalConfig {
  calComUrl: string;
  linkedinUrl: string;
  contraUrl: string;
  portfolioUrl: string;
  email: string;
  startingPrice: string;
  pricingLabel: string;
  pricingSubtext: string;
  domainCostEstimate: string;
  contraHeadline: string;
  contraCopy: string;
  contraCta: string;
}

export const INTERNATIONAL_CONFIG: InternationalConfig = {
  // Primary CTA Cal.com URL for 15-minute discovery calls
  calComUrl: 'https://cal.com/david-raigoza-1juo6a/book-a-discovery-call',

  // David Raigoza's LinkedIn Profile URL
  linkedinUrl: 'https://www.linkedin.com/in/david-raigoza-a21092405/',

  // Contra profile URL for project contracts & payments
  contraUrl: 'https://contra.com/david_raigoza_tqyg4fmq/work?r=david_raigoza_tqyg4fmq',

  // Main design portfolio URL
  portfolioUrl: 'https://davidraigoza.design/',

  // Direct contact email
  email: 'david@davidraigoza.online',

  // International starting price in USD (USD only throughout /us/)
  startingPrice: '$499 USD',
  pricingLabel: 'Transparent starting investment',
  pricingSubtext: 'Starting price is visible · Scope defined before work begins',

  // Domain cost benchmark in USD
  domainCostEstimate: 'Approx. $15 - $20 USD / year',

  // Contra payment options
  contraHeadline: 'Payment through Contra',
  contraCopy: 'If preferred, projects can be contracted and paid through Contra.',
  contraCta: 'View my Contra profile →',
};
