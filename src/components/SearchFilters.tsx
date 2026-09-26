export default function SearchFilters() {
  return (
    <form aria-label="Property search filters"
          className="flex flex-wrap items-end gap-4 rounded-lg bg-gray-100 p-4"
          onSubmit={(e) => e.preventDefault()}>
      <div className="flex w-full flex-col sm:w-auto">
        <label htmlFor="city" className="mb-1 text-sm font-medium text-gray-900">City</label>
        <input id="city" name="city" type="text"
               className="min-h-[44px] w-full rounded border border-gray-300 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" />
      </div>
      <div className="flex w-full flex-col sm:w-auto">
        <label htmlFor="beds" className="mb-1 text-sm font-medium text-gray-900">Bedrooms</label>
        <select id="beds" name="beds"
                className="min-h-[44px] w-full rounded border border-gray-300 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
        </select>
      </div>
      <button type="submit"
              className="min-h-[44px] rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
        Search properties
      </button>
    </form>
  );
}