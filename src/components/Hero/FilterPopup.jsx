import { useState } from "react";

export default function FilterPopup({ onClose }) {
  const [range, setRange] = useState(0);

  return (
    <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-white rounded-2xl p-6 shadow-xl border">
        <h4 className="font-semibold mb-6 text-start apply_filter">
          Apply Filters
        </h4>

        {/* Grid for dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            "Select Search",
            "Select Country",
            "Select Category",
            "Select Subcategory",
          ].map((label, index) => (
            <select
              key={index}
              className="w-full border border-gray-300 rounded-md  filter-select-tab text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                {label}
              </option>
              <option>{label} Option 1</option>
              <option>{label} Option 2</option>
            </select>
          ))}
        </div>

        {/* Price Range */}
        <div className="mb-6 text-start">
          <label className="block text-sm  mb-2 ">
            Price Range Up to ${" "}
            <span className="text-green-600 font-bold">{range}</span>
          </label>
          <input
            type="range"
            min={0}
            max={1000000}
            step={1000}
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="w-full price-range"
          />
        </div>

        {/* Footer buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="border border-gray-300 px-5 py-2 rounded  hover:bg-gray-100"
          >
            Clear All
          </button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
