export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  price: number;
  beds: number;
  baths: number;
  sqft?: number;
  imageUrl: string;
  imageAlt: string;
  url: string;
}

export interface Sponsor {
  id: string;
  businessName: string;
  tagline: string;
  url: string;
  logoUrl?: string;
}