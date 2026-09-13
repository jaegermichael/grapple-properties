export interface Suburb {
  id: string;
  name: string;
  tagline: string;
  description: string;
  averagePrice: string;
  activeListings: number;
  character: string;
  image: string;
}

export const SUBURBS: Suburb[] = [
  {
    id: 'borrowdale',
    name: 'Borrowdale',
    tagline: 'The Gold Standard of Harare Living',
    description: 'Home to diplomatic residences, sweeping equestrian acres, Sam Levys Village, and refined leafy privacy.',
    averagePrice: 'US$850,000',
    activeListings: 18,
    character: 'Diplomatic & Stately',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'borrowdale-brooke',
    name: 'Borrowdale Brooke',
    tagline: 'Premier 24-Hour Guarded Golf Sanctuary',
    description: 'Harares most prestigious gated residential community offering Peter Matkovich championship golf, total security, and tranquil living.',
    averagePrice: 'US$1,100,000',
    activeListings: 7,
    character: 'Private Golf Estate',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'highlands',
    name: 'Highlands',
    tagline: 'High-Altitude Architectural Haven',
    description: 'Elevated topography, lush indigenous Msasa tree cover, vibrant art galleries, and modern pavilion estates with swift highway access.',
    averagePrice: 'US$720,000',
    activeListings: 14,
    character: 'Contemporary & Verdant',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'mount-pleasant',
    name: 'Mount Pleasant',
    tagline: 'Academic, Diplomatic & Executive Prestige',
    description: 'Bordering prestigious institutions and international liaison missions, celebrated for generous 1-acre stands and prolific groundwater tables.',
    averagePrice: 'US$620,000',
    activeListings: 12,
    character: 'Established & Academic',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'newlands',
    name: 'Newlands',
    tagline: 'Harares Thriving Eastern Commercial & Lifestyle Belt',
    description: 'Vibrant boutique dining, corporate headquarters developments, and charming colonial residences transformed for modern dual-use living.',
    averagePrice: 'US$480,000',
    activeListings: 9,
    character: 'Cosmopolitan & Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'avondale',
    name: 'Avondale',
    tagline: 'Heritage Enclave with Modern Vibrancy',
    description: 'One of Harares oldest and most walkable northern suburbs, characterized by mature jacarandas, expatriate flats, and vibrant cultural dining.',
    averagePrice: 'US$390,000',
    activeListings: 11,
    character: 'Walkable Heritage',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'
  }
];
