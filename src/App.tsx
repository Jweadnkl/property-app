import type { Property, Sponsor } from './types';
import PropertyCard from './components/PropertyCard';
import SponsorBanner from './components/SponsorBanner';
import SearchFilters from './components/SearchFilters';

const properties: Property[] = [
  { id: 'p1', title: 'Sunny Craftsman Bungalow', address: '412 Maple St', city: 'Portland',
    price: 525000, beds: 3, baths: 2, sqft: 1650,
    imageUrl: 'https://picsum.photos/seed/p1/640/360',
    imageAlt: 'Front exterior of a one-story craftsman bungalow with a covered porch',
    url: '#listing-p1' },
  { id: 'p2', title: 'Downtown Loft with Skyline View', address: '88 Pine Ave, Unit 12B', city: 'Seattle',
    price: 689000, beds: 2, baths: 2,
    imageUrl: 'https://picsum.photos/seed/p2/640/360',
    imageAlt: 'Open-plan loft interior with floor-to-ceiling windows and city view',
    url: '#listing-p2' },
  { id: 'p3', title: 'Quiet Suburban Ranch Home', address: '17 Cedar Lane', city: 'Austin',
    price: 410000, beds: 4, baths: 3, sqft: 2100,
    imageUrl: 'https://picsum.photos/seed/p3/640/360',
    imageAlt: 'Single-story ranch house with a green lawn and two-car garage',
    url: '#listing-p3' },
];

const sponsor: Sponsor = {
  id: 's1', businessName: 'Summit Mortgage Group',
  tagline: 'Pre-qualify in under 10 minutes.',
  url: '#sponsor-summit',
};

export default function App() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4">
      <header>
        <h1 className="text-2xl font-bold">Find Your Next Home</h1>
      </header>
      <SearchFilters />
      <SponsorBanner sponsor={sponsor} />
      <main>
        <h2 className="sr-only">Property listings</h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <li key={p.id}>
              <PropertyCard property={p} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}