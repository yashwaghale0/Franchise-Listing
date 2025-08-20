import { useState } from "react";

function PriceInput({ value, onChange, placeholder }) {
  const formatNumber = (val) => {
    if (!val) return "";
    // Remove commas
    const num = val.replace(/,/g, "");
    // Allow only numbers and dot
    if (isNaN(num)) return val;

    // Format with commas (Indian format)
    return Number(num).toLocaleString("en-IN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  const handleChange = (e) => {
    let rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(rawValue) && rawValue !== "") {
      onChange(rawValue); // pass unformatted number up
    } else {
      onChange("");
    }
  };

  return (
    <input
      type="text"
      value={formatNumber(value)}
      onChange={handleChange}
      placeholder={placeholder || "Enter amount"}
      className="price-input"
    />
  );
}

export default PriceInput;
