import type { Sponsor } from '../types';

interface Props {
  sponsor: Sponsor;
}

export default function SponsorBanner({ sponsor }: Props) {
  return (
    <aside aria-label="Sponsored content"
           className="flex flex-col gap-4 rounded-lg border border-dashed border-gray-400 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="shrink-0 rounded bg-gray-800 px-2 py-0.5 text-xs font-bold uppercase text-white">
            Sponsored
          </span>
          <strong className="truncate text-gray-900">{sponsor.businessName}</strong>
        </div>
        {sponsor.tagline && (
          <p className="mt-1 truncate text-sm text-gray-700">{sponsor.tagline}</p>
        )}
      </div>
      <a href={sponsor.url}
         className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded border border-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
        Visit {sponsor.businessName}
      </a>
    </aside>
  );
}