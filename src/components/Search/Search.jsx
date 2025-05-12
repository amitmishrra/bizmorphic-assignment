import React from "react";
import { useSelector } from "react-redux";
import colors from "../../data/colors";

/**
 * SearchBar Component
 * A themed search input field.
 *
 * Props:
 * - value: Current input value
 * - onChange: Callback to update the value
 * - placeholder: Optional placeholder text (default: "Search...")
 */
const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)} // Handle input change
        placeholder={placeholder}
        className="w-full min-w-[140px] flex justify-between items-center px-4 py-2 border-b-2 bg-transparent text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{
          borderColor: colors[theme]?.border, // Themed border color
        }}
      />
    </div>
  );
};

export default SearchBar;
