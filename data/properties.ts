export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  currency: 'USD';
  type: 'Residential' | 'Commercial' | 'Land' | 'Rentals';
  status: 'For Sale' | 'To Let' | 'Under Offer';
  featured: boolean;
  suburb: 'Borrowdale' | 'Highlands' | 'Mount Pleasant' | 'Avondale' | 'Newlands' | 'Borrowdale Brooke' | 'Pomona' | 'Chisipite';
  city: 'Harare';
  address: string;
  bedrooms: number;
  bathrooms: number;
  erfSize: string;
  buildingSize: string;
  garages: number;
  images: string[];
  description: string[];
  features: string[];
  keyHighlights: {
    borehole: boolean;
    solarPower: string;
    security: string;
    titleDeed: boolean;
    staffQuarters: boolean;
    pool: boolean;
  };
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
    photo: string;
  };
}

export const PROPERTIES: Property[] = [
  {
    id: 'GP-401',
    slug: 'highlands-contemporary-estate',
    title: 'The Highlands Contemporary Estate',
    tagline: 'A masterwork of pavilion architecture, indigenous landscaping, and absolute off-grid resilience.',
    price: 980000,
    priceFormatted: 'US$980,000',
    currency: 'USD',
    type: 'Residential',
    status: 'For Sale',
    featured: true,
    suburb: 'Highlands',
    city: 'Harare',
    address: 'Enterprise Corridor Sanctuary, Highlands, Harare',
    bedrooms: 5,
    bathrooms: 5,
    erfSize: '4,500 m² (1.1 Acres)',
    buildingSize: '720 m²',
    garages: 4,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80'
    ],
    description: [
      'Occupying a commanding acre within one of Highlands quietest tree-lined enclaves, this contemporary architectural residence represents modern Zimbabwean luxury living at its finest.',
      'Designed for seamless indoor-outdoor entertaining, expansive floor-to-ceiling glass expanses dissolve into teak decking, an azure rim-flow swimming pool, and indigenous landscaped gardens designed around mature Msasa trees.',
      'Engineered for true self-sufficiency with a prolific commercial-grade borehole, 16kVA high-yield solar inverter array with lithium storage, fully automated irrigation, double staff accommodation, and fortified perimeter security.'
    ],
    features: [
      'Prolific high-yield borehole connected to 20,000L storage',
      '16kVA 3-phase Solar System with 30kWh Lithium-ion bank',
      'Heated 14m rim-flow infinity pool with poolside pavilion',
      'Chefs kitchen with integrated Siemens appliances and walk-in cold room',
      'Double executive staff cottages with independent utilities',
      'Full title deeds registered and ready for immediate transfer'
    ],
    keyHighlights: {
      borehole: true,
      solarPower: '16kVA Solar & Lithium Bank',
      security: 'Guard house, electric boundary & 16-cam CCTV',
      titleDeed: true,
      staffQuarters: true,
      pool: true
    },
    agent: {
      name: 'Tafadzwa Chigumba',
      role: 'Principal Real Estate Consultant',
      phone: '+263 242 770186',
      email: 't.chigumba@grappleproperties.co.zw',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'GP-402',
    slug: 'borrowdale-brooke-fairway-residence',
    title: 'Borrowdale Brooke Fairway Villa',
    tagline: 'Exclusive golf-estate sanctuary with panoramic green views and timeless architectural dignity.',
    price: 1350000,
    priceFormatted: 'US$1,350,000',
    currency: 'USD',
    type: 'Residential',
    status: 'For Sale',
    featured: true,
    suburb: 'Borrowdale Brooke',
    city: 'Harare',
    address: 'Fairway Ridge, Borrowdale Brooke Golf Estate, Harare',
    bedrooms: 6,
    bathrooms: 6,
    erfSize: '2,200 m²',
    buildingSize: '840 m²',
    garages: 3,
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1400&q=80'
    ],
    description: [
      'Situated along the prestigious fairway of Zimbabwes premier 24-hour guarded golf community, this palatial home blends grand proportions with understated colonial and contemporary poise.',
      'Highlights include a double-volume foyer crowned with bespoke bronze balustrading, a 12-seater formal dining hall, a subterranean temperature-controlled wine cellar, and a private cinema lounge.',
      'Uncompromised security in Harares most coveted security enclave, offering tranquility, birdlife, and uninterrupted lifestyle excellence.'
    ],
    features: [
      'Direct golf-course fairway frontage with private cart garage',
      'Subterranean 800-bottle temperature-controlled wine cellar',
      'Acoustically treated 10-seat 4K Dolby Atmos private cinema',
      'Solar inverter system with automatic backup diesel generator',
      '24-Hour estate armed patrol & boom biometric checkpoint access',
      'Immaculate manicured gardens with putting green'
    ],
    keyHighlights: {
      borehole: true,
      solarPower: '20kVA Hybrid Solar & Silent Gen',
      security: '24/7 Gated Boom & Armed Patrol',
      titleDeed: true,
      staffQuarters: true,
      pool: true
    },
    agent: {
      name: 'Rumbidzai Mutasa',
      role: 'Luxury Portfolio Director',
      phone: '+263 242 770186',
      email: 'r.mutasa@grappleproperties.co.zw',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'GP-403',
    slug: 'mount-pleasant-diplomatic-compound',
    title: 'Mount Pleasant Diplomatic Compound',
    tagline: 'High-spec modern diplomatic residence crafted for ambassadorial reception and top-tier security.',
    price: 680000,
    priceFormatted: 'US$680,000',
    currency: 'USD',
    type: 'Residential',
    status: 'For Sale',
    featured: true,
    suburb: 'Mount Pleasant',
    city: 'Harare',
    address: 'Pendennis Road Enclave, Mount Pleasant, Harare',
    bedrooms: 5,
    bathrooms: 4,
    erfSize: '4,000 m² (1 Acre)',
    buildingSize: '550 m²',
    garages: 3,
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80'
    ],
    description: [
      'Configured specifically for diplomatic posting, NGO executive tenure, or high-security residential living in Harares northern corridor.',
      'The compound includes an ambassadorial reception wing, executive study, separate guest cottage, and rigorous perimeter defense standards with fortified guard quarters.',
      'Surrounded by lush emerald lawns and orchard groves, supported by two productive boreholes with extensive filtration systems.'
    ],
    features: [
      'Dual boreholes with automated UV purification and 30,000L capacity',
      'Self-contained 2-bedroom executive guest wing with kitchen',
      'Diplomatic-grade security booth with CCTV console and panic triggers',
      'Expansive reception terrace hosting 100+ guests overlooking gardens',
      'Solar backup guaranteeing continuous 24/7 uninterrupted power',
      'Pristine title deed held in clean private company structure'
    ],
    keyHighlights: {
      borehole: true,
      solarPower: '15kVA Victron Solar System',
      security: 'Diplomatic guardhouse, electric fence & beam system',
      titleDeed: true,
      staffQuarters: true,
      pool: true
    },
    agent: {
      name: 'Tafadzwa Chigumba',
      role: 'Principal Real Estate Consultant',
      phone: '+263 242 770186',
      email: 't.chigumba@grappleproperties.co.zw',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'GP-404',
    slug: 'borrowdale-valley-manor',
    title: 'The Borrowdale Valley Manor',
    tagline: 'Stately residence set in serene private parkland minutes from Sam Levys Village.',
    price: 1150000,
    priceFormatted: 'US$1,150,000',
    currency: 'USD',
    type: 'Residential',
    status: 'For Sale',
    featured: false,
    suburb: 'Borrowdale',
    city: 'Harare',
    address: 'Piers Road Precinct, Borrowdale, Harare',
    bedrooms: 5,
    bathrooms: 5,
    erfSize: '8,000 m² (2 Acres)',
    buildingSize: '780 m²',
    garages: 4,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80'
    ],
    description: [
      'A rare two-acre pastoral sanctuary nestled right in the golden heart of Borrowdale, offering unmatched serenity and heritage timber finishes.',
      'Features high cedar exposed beams, triple fireplace hearths, an expansive master wing with dressing room, and an all-weather floodlit tennis court.',
      'Water wealth is guaranteed with a constant 8,000-litre-per-hour borehole and computerized drip irrigation across mature rose gardens.'
    ],
    features: [
      '2-acre sub-divisible flat prime terrain with established indigenous woodland',
      'High yield 8,000 L/hr borehole with 40,000L tank capacity',
      'Floodlit tennis court and Olympic-length swimming pool',
      'Triple lockup garage plus covered bays for 6 vehicles',
      'Full staff village accommodating up to 4 grounds staff with ablutions',
      'Registered freehold title deed'
    ],
    keyHighlights: {
      borehole: true,
      solarPower: '20kVA Inverter with Lithium Array',
      security: 'Perimeter wall, razor wire & rapid response link',
      titleDeed: true,
      staffQuarters: true,
      pool: true
    },
    agent: {
      name: 'Rumbidzai Mutasa',
      role: 'Luxury Portfolio Director',
      phone: '+263 242 770186',
      email: 'r.mutasa@grappleproperties.co.zw',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'GP-405',
    slug: 'newlands-corporate-park',
    title: 'Newlands Premium Corporate Park',
    tagline: 'Turnkey AAA-grade commercial office campus with premier arterial highway visibility.',
    price: 1850000,
    priceFormatted: 'US$1,850,000',
    currency: 'USD',
    type: 'Commercial',
    status: 'For Sale',
    featured: true,
    suburb: 'Newlands',
    city: 'Harare',
    address: 'Enterprise Road Commercial Belt, Newlands, Harare',
    bedrooms: 0,
    bathrooms: 8,
    erfSize: '3,800 m²',
    buildingSize: '1,200 m² GLA',
    garages: 45,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80'
    ],
    description: [
      'An exceptional opportunity to acquire a bespoke commercial campus along Harares thriving eastern business corridor in Newlands.',
      'Offering 1,200 m² of gross lettable area arranged over two architecturally distinct pavilion wings with central glass atrium, executive boardroom suites, and server infrastructure.',
      'Fully tenanted or available for corporate headquarters owner-occupation with dedicated fiber redundancy, massive solar generation, and 45 secure paved bays.'
    ],
    features: [
      '1,200 m² Grade-A contemporary office space with flexible modular partitions',
      '45 dedicated paved vehicle bays with shade ports',
      '50kVA commercial solar setup with synchronised 100kVA backup generator',
      'Commercial fiber backbone with CAT6 cabling and server cooling room',
      'Prime Enterprise Road frontage with prominent corporate pylon signage',
      'Clean commercial title with projected 10.5% net USD yield'
    ],
    keyHighlights: {
      borehole: true,
      solarPower: '50kVA Commercial Solar System',
      security: 'Biometric access control & 24/7 on-site security desk',
      titleDeed: true,
      staffQuarters: false,
      pool: false
    },
    agent: {
      name: 'Farai Makoni',
      role: 'Commercial & Investment Director',
      phone: '+263 242 770186',
      email: 'f.makoni@grappleproperties.co.zw',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'GP-406',
    slug: 'pomona-logistics-hub',
    title: 'Pomona Logistics & Warehousing Hub',
    tagline: 'High-cube distribution facility strategically positioned off Alps Road.',
    price: 1450000,
    priceFormatted: 'US$1,450,000',
    currency: 'USD',
    type: 'Commercial',
    status: 'For Sale',
    featured: false,
    suburb: 'Pomona',
    city: 'Harare',
    address: 'Alps Industrial Corridor, Pomona, Harare',
    bedrooms: 0,
    bathrooms: 6,
    erfSize: '6,000 m²',
    buildingSize: '2,400 m²',
    garages: 20,
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80'
    ],
    description: [
      'Positioned within Harares rapidly expanding northern light industrial precinct, this high-clearance facility is engineered for regional distribution and logistics operations.',
      'Features 9-meter eaves clearance, triple raised loading docks with roller shutter access, heavy industrial concrete flooring, and dual weighbridge capability.',
      'Includes an adjoining 300 m² modern administrative suite with open-plan reception, conference rooms, and kitchenettes.'
    ],
    features: [
      '2,400 m² clear-span warehouse floor with 9m height to eaves',
      'Heavy load bearing slab capable of 35-tonne container transit',
      '3 automated roller doors with hydraulic dock levelers',
      'High yield commercial borehole with certified industrial volume',
      'Dedicated 3-phase 200kVA transformer substation on site',
      'Full title deeds with commercial zoning rights approved'
    ],
    keyHighlights: {
      borehole: true,
      solarPower: '3-Phase High Capacity Transformer',
      security: 'Security guardhouse with dual boom gating',
      titleDeed: true,
      staffQuarters: true,
      pool: false
    },
    agent: {
      name: 'Farai Makoni',
      role: 'Commercial & Investment Director',
      phone: '+263 242 770186',
      email: 'f.makoni@grappleproperties.co.zw',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'GP-407',
    slug: 'avondale-west-executive-villa',
    title: 'Avondale West Executive Villa',
    tagline: 'Turnkey fully-furnished ambassadorial sanctuary available for executive tenancy.',
    price: 3200,
    priceFormatted: 'US$3,200 / mo',
    currency: 'USD',
    type: 'Rentals',
    status: 'To Let',
    featured: true,
    suburb: 'Avondale',
    city: 'Harare',
    address: 'King George Road Enclave, Avondale, Harare',
    bedrooms: 4,
    bathrooms: 4,
    erfSize: '2,000 m²',
    buildingSize: '420 m²',
    garages: 2,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80'
    ],
    description: [
      'Available for lease to multilateral agencies, embassies, and senior corporate executives seeking immaculate living in Avondale.',
      'Offered fully furnished with custom Italian fittings, private heated splash pool, dedicated gardener service, high-speed fiber internet, and comprehensive backup infrastructure.',
      'Walking distance to Avondale Shopping Centre, cafes, and diplomatic liaison missions.'
    ],
    features: [
      'Fully designer furnished including premium linens and appliances',
      '10kVA solar power system with zero grid-drop interruption',
      'Private sparkling cocktail pool and covered braai terrace',
      'Inclusive groundskeeper and weekly pool care service',
      'Top-tier security system linked to Safeguard rapid response',
      'Diplomatic lease clause compliant'
    ],
    keyHighlights: {
      borehole: true,
      solarPower: '10kVA Hybrid Solar Inverter',
      security: 'Guardhouse, panic alarms & perimeter beams',
      titleDeed: true,
      staffQuarters: true,
      pool: true
    },
    agent: {
      name: 'Rumbidzai Mutasa',
      role: 'Luxury Portfolio Director',
      phone: '+263 242 770186',
      email: 'r.mutasa@grappleproperties.co.zw',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'GP-408',
    slug: 'chisipite-parkland-development-plot',
    title: 'Chisipite Parkland Development Plot',
    tagline: 'Rare sub-divisible residential acre with mature Msasa canopy and prolific water table.',
    price: 260000,
    priceFormatted: 'US$260,000',
    currency: 'USD',
    type: 'Land',
    status: 'For Sale',
    featured: false,
    suburb: 'Chisipite',
    city: 'Harare',
    address: 'Hindhead Avenue, Chisipite, Harare',
    bedrooms: 0,
    bathrooms: 0,
    erfSize: '4,047 m² (1 Full Acre)',
    buildingSize: 'Ready for Build',
    garages: 0,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80'
    ],
    description: [
      'An unrepeatable opportunity to secure virgin residential land in one of Harare Easts premier residential suburbs.',
      'Gently sloping topography framed by indigenous Msasa trees, offering ideal elevation for an architectural split-level residence or cluster development.',
      'Tested and sited with exceptional underground water capacity, walled on two boundaries with direct tarmac road access.'
    ],
    features: [
      '1 Full Acre (4,047 m²) of build-ready prime residential land',
      'Tested water point with high-capacity yield rating',
      'Walled on two sides with established mature boundary foliage',
      'Direct council water and electricity connection points',
      'Approved architectural zoning for luxury residential or cluster units',
      'Clean title deed free of encumbrances'
    ],
    keyHighlights: {
      borehole: false,
      solarPower: 'Grid ready / Solar ideal',
      security: 'Established residential security zone',
      titleDeed: true,
      staffQuarters: false,
      pool: false
    },
    agent: {
      name: 'Tafadzwa Chigumba',
      role: 'Principal Real Estate Consultant',
      phone: '+263 242 770186',
      email: 't.chigumba@grappleproperties.co.zw',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    }
  }
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return PROPERTIES.filter((p) => p.featured);
}
