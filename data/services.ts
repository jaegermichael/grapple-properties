export interface Service {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: 'sales',
    slug: 'property-sales',
    title: 'Property Sales',
    summary: 'High-touch acquisition and disposal of prime residential, commercial, industrial, and agricultural assets.',
    description: 'Whether disposing of a trophy residence in Borrowdale or acquiring a commercial campus in Newlands, Grapple Properties provides strategic positioning, rigorous valuation benchmarking, bespoke editorial marketing, and vetted buyer qualification to ensure maximum realized value with complete discretion.',
    deliverables: [
      'Confidential and open-market portfolio marketing',
      'Targeted diaspora and institutional buyer syndication',
      'Comprehensive title deed and legal encumbrance vetting',
      'Professional conveyance and escrow transaction coordination'
    ],
    icon: 'Building2'
  },
  {
    id: 'letting',
    slug: 'property-letting',
    title: 'Property Letting',
    summary: 'Institutional and private tenant placement with diplomatic-standard lease management.',
    description: 'We connect high-caliber property owners with verified corporate, embassy, NGO, and executive tenants. Our leasing specialists ensure robust tenancy agreements compliant with Zimbabwean property statutes, structured currency protections, and transparent deposit security.',
    deliverables: [
      'Rigorous diplomatic and corporate tenant credit screening',
      'Custom lease agreements tailored to US Dollar obligations',
      'Detailed photographic entry and exit condition schedules',
      'Swift vacancy turnaround via proactive tenancy databases'
    ],
    icon: 'Key'
  },
  {
    id: 'management',
    slug: 'property-management',
    title: 'Property Management',
    summary: 'Asset preservation, proactive maintenance oversight, and transparent financial stewardship.',
    description: 'Protecting capital value through meticulous day-to-day oversight. From preventative borehole and solar servicing to automated rent collection and vendor supervision, we manage your real estate with institutional rigor so you enjoy effortless passive returns.',
    deliverables: [
      'Automated US Dollar rent collection and owner statements',
      'Pre-vetted contractor dispatch for solar, water, and structural repairs',
      'Quarterly physical site audits with high-resolution photographic reports',
      '24/7 emergency response protocols for critical infrastructure'
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 'valuation',
    slug: 'property-valuation',
    title: 'Property Valuation',
    summary: 'Accurate, certified valuation reports for open market sale, mortgage appraisal, and asset accounting.',
    description: 'Our certified valuation practitioners combine deep historical sales databases with real-time transactional intelligence across Harare and regional Zimbabwe to deliver defensible, audit-ready property valuations.',
    deliverables: [
      'Open market value assessments for buyers and sellers',
      'Mortgage and balance sheet corporate valuations',
      'Insurance reinstatement cost analyses',
      'Rental yield benchmarking and municipal rates reviews'
    ],
    icon: 'Calculator'
  },
  {
    id: 'development',
    slug: 'property-development',
    title: 'Property Development',
    summary: 'End-to-end development consultancy, feasibility modeling, and off-plan project sales.',
    description: 'From vacant land subdivision in Chisipite to medium-density residential clusters and commercial parks, we partner with developers from land assembly and council approvals through architectural advisory, brand positioning, and off-plan sales drives.',
    deliverables: [
      'Land zoning, subdivision, and town planning advisory',
      'Financial yield modeling and feasibility studies',
      'Off-plan architectural visualization and bespoke showroom marketing',
      'Milestone sales execution and escrow release management'
    ],
    icon: 'Hammer'
  },
  {
    id: 'investment',
    slug: 'property-investment-advisory',
    title: 'Property Investment Advisory',
    summary: 'Strategic counsel for high-net-worth individuals, institutional funds, and diaspora investors.',
    description: 'Zimbabwe real estate offers compelling dollarized returns for investors with disciplined execution. We guide clients on macro-trends, currency resilience, inflation hedging, and opportunistic land banking to build generational real estate wealth.',
    deliverables: [
      'Diaspora remote investment structuring and oversight',
      'Commercial yield optimization and repositioning advisory',
      'Syndicated co-investment and land-banking opportunities',
      'Exit strategy formulation and capital reallocation'
    ],
    icon: 'TrendingUp'
  }
];
