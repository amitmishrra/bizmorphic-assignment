import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import colors from "../../data/colors";

/**
 * MultiSelectDropdown Component
 * A custom dropdown allowing multiple selections with checkboxes.
 *
 * Props:
 * - options: Array of selectable values
 * - selected: Array of currently selected options
 * - onChange: Callback with updated selected values
 */
const MultiSelectDropdown = ({ options, selected = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const theme = useSelector((state) => state.theme.mode);

  const hoverClasses = {
    Light: `hover:bg-[rgb(187,187,187)]`,
    Dark: `hover:bg-[#21262D]`,
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Position dropdown below button
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen]);

  // Toggle selected option
  const handleToggle = (opt) => {
    const newSelected = selected.includes(opt)
      ? selected.filter((s) => s !== opt)
      : [...selected, opt];
    onChange(newSelected);
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: colors[theme]?.textPrimary,
          borderColor: colors[theme]?.border,
        }}
        className={`w-full min-w-[140px] flex justify-between items-center px-4 py-2 border-b-2 bg-transparent text-left focus:outline-none focus:ring-2 focus:ring-blue-500`}
      >
        <span className="truncate">
          {selected.length > 0 ? selected.join(", ") : "Select columns"}
        </span>
        <svg
          className={`w-4 h-4 ml-2 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul
          ref={dropdownRef}
          className={`absolute z-[9999] max-h-[220px] overflow-y-auto bg-white border rounded-md shadow-lg text-sm`}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: `${position.width}px`,
            position: "absolute",
            background: colors[theme]?.surface,
            borderColor: colors[theme]?.border,
          }}
        >
          {options.map((opt) => (
            <li
              key={opt}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${hoverClasses[theme]}`}
              onClick={() => handleToggle(opt)}
              style={{
                color: colors[theme]?.textSecondary,
              }}
            >
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => handleToggle(opt)}
                className="accent-blue-500"
                disabled={opt === "Name"}
              />
              {opt}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MultiSelectDropdown;
