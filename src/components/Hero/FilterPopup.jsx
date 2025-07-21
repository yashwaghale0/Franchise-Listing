import { useState, useEffect } from "react";

export default function FilterPopup({ onClose, onApplyFilters }) {
  const [range, setRange] = useState(0);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const categories = [
    "Food & Beverage",
    "Retail",
    "Service Based",
    "Health & Fitness",
  ];
  const subcategories = {
    "Food & Beverage": ["Mexican", "Japanese", "Brazilian", "Vegan"],
    Retail: ["Clothing", "Electronics", "Home Goods"],
    "Service Based": ["Cleaning", "Consulting", "Education"],
    "Health & Fitness": ["Gyms", "Yoga Studios", "Nutrition"],
  };

  const handleApply = () => {
    const filters = {
      category,
      subcategory,
      range,
    };
    onApplyFilters(filters); // Send filters to parent
  };

  const handleClear = () => {
    setCategory("");
    setSubcategory("");
    setRange(0);
    onApplyFilters({ category: "", subcategory: "", range: 0 });
    onClose();
  };

  useEffect(() => {
    const input = document.getElementById("rangeSlider");
    if (input) {
      updateSliderBackground(input);
    }
  }, []);

  const updateSliderBackground = (input) => {
    const min = parseInt(input.min);
    const max = parseInt(input.max);
    const val = parseInt(input.value);

    const percentage = ((val - min) / (max - min)) * 100;

    input.style.background = `linear-gradient(to right, #00db75 0%, #00b4db ${percentage}%, #ddd ${percentage}%)`;
  };

  return (
    <div className="absolute top-[245px] left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 FilterPopup">
      <div className="bg-white rounded-2xl p-6 shadow-xl border">
        <h4 className="font-semibold mb-6 text-start apply_filter">
          Apply Filters
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <select
            className="w-full border border-gray-300 rounded-md filter-select-tab text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory("");
            }}
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            className="w-full border border-gray-300 rounded-md filter-select-tab text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            disabled={!category}
          >
            <option value="" disabled>
              Select Subcategory
            </option>
            {(subcategories[category] || []).map((subcat, index) => (
              <option key={index} value={subcat}>
                {subcat}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6 text-start">
          <label className="block text-sm  mb-2 price-range-label">
            Investment Range (Up to ${" "}
            <span className="price-range-amt font-bold">{range}</span>)
          </label>
          <input
            type="range"
            min={0}
            max={999}
            step={100}
            value={range}
            onChange={(e) => {
              setRange(e.target.value);
              updateSliderBackground(e.target);
            }} // Add this line}
            className="w-full price-range"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button onClick={handleClear} className=" clear-all-btn">
            Clear All
          </button>
          <button
            onClick={handleApply}
            className="Applyfilter-btn  apply-filter-btn"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
