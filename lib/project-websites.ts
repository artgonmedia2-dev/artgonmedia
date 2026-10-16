export const projectWebsites = [
  { slug: 'therelec', title: 'Therelec', category: 'Électricité & climatisation', url: 'https://www.therelec.fr/', domain: 'therelec.fr' },
  { slug: 'luxury-suite', title: 'Luxury Suite', category: 'Location de suites & appartements', url: 'https://luxurysuite.nl/', domain: 'luxurysuite.nl' },
  { slug: 'abdesamie-car', title: 'AbdesamieCar', category: 'Location de voitures', url: 'https://abdesamiecar.com/', domain: 'abdesamiecar.com' },
  { slug: 'diaspora-immobilier-conseil', title: 'Diaspora Immobilier Conseil', category: 'Immobilier', url: 'https://diasporaimmobilierconseil.com/', domain: 'diasporaimmobilierconseil.com' },
  { slug: 'nador-west-wood', title: 'Nador West Wood', category: 'Bois & panneaux', url: 'https://www.nadorwestwood.com/', domain: 'nadorwestwood.com' },
] as const

export type ProjectWebsite = (typeof projectWebsites)[number]
