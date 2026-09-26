import type { Property } from '../types';

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <img
        src={property.imageUrl}
        alt={property.imageAlt}
        loading="lazy"
        className="aspect-video w-full object-cover"
      />

      <div className="p-4">
        <h2 className="truncate text-lg font-semibold text-gray-900" title={property.title}>
          {property.title}
        </h2>

        <p className="truncate text-sm text-gray-700">
          {property.address}, {property.city}
        </p>

        <p className="mt-1 text-xl font-bold text-gray-900">
          ${property.price.toLocaleString()}
        </p>

        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
          <li>{property.beds} beds</li>
          <li>{property.baths} baths</li>
          {property.sqft != null && <li>{property.sqft.toLocaleString()} sqft</li>}
        </ul>

        <a
          href={property.url}
          aria-label={`View listing for ${property.title}`}
          className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          View listing: {property.title}
        </a>
      </div>
    </article>
  );
}