import React, { useState, useRef, useEffect } from "react";
import colors from "../../data/colors";
import { useSelector } from "react-redux";

/**
 * Dropdown Component
 * A custom dropdown with theme support.
 *
 * Props:
 * - options: Array of selectable options
 * - value: Current selected value
 * - onChange: Callback when value changes
 * - unselect: Allow deselecting the current option (default false)
 */
const Dropdown = ({ options, value, onChange, unselect = false }) => {
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

  // Calculate dropdown position
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

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: value ? colors[theme]?.textPrimary : "",
          borderColor: colors[theme]?.border,
        }}
        className={`w-full min-w-[140px] flex justify-between items-center px-4 py-2 border-b-2 bg-transparent text-left focus:outline-none focus:ring-2 ${
          value ? colors[theme]?.textSecondary : "text-gray-400"
        }`}
      >
        {value || "Select an option"}
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
          className={`absolute z-[9999] max-h-[200px] overflow-y-auto border rounded-md shadow-lg text-sm`}
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
              onClick={() => {
                onChange(unselect && opt === value ? "" : opt);
                setIsOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer ${
                value === opt ? "bg-blue-500 text-white font-semibold" : ""
              } ${hoverClasses[theme]}`}
              style={{
                color:
                  value === opt
                    ? colors[theme]?.textPrimary
                    : colors[theme]?.textSecondary,
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
