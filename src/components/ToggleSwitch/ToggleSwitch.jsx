/**
 * ToggleSwitch Component
 * A theme-aware toggle switch for switching between two options.
 *
 * Props:
 * - options: Array with exactly two toggle options (default: ["On", "Off"])
 * - onToggle: Callback invoked when selection changes
 * - label: Optional label shown above the toggle
 * - value: Currently selected value
 */

import React, { useState } from "react";
import colors from "../../data/colors";
import { useSelector } from "react-redux";

const ToggleSwitch = ({ options = ["On", "Off"], onToggle, label, value }) => {
  const theme = useSelector((state) => state.theme.mode);
  const themeColors = colors[theme];
  const [selected, setSelected] = useState(value || options[0]);

  const handleToggle = () => {
    const next = selected === options[0] ? options[1] : options[0];
    setSelected(next);
    if (onToggle) onToggle(next);
  };

  if (options.length !== 2) {
    console.error("ToggleSwitch expects exactly 2 options.");
    return null;
  }

  return (
    <div className="inline-block">
      {label && <label className="block mb-1 font-bold">{label}</label>}
      <div
        onClick={handleToggle}
        className="inline-flex items-center justify-between rounded-full cursor-pointer transition-all duration-300 min-w-max px-1 py-1"
        style={{
          backgroundColor: themeColors.surface,
          border: `1px solid ${themeColors.border}`,
        }}
      >
        {options.map((opt) => (
          <div
            key={opt}
            className={`text-center text-sm font-medium px-3 py-1 rounded-full transition-colors duration-300 ${
              selected === opt ? "text-white" : "text-gray-500"
            }`}
            style={{
              backgroundColor:
                selected === opt ? themeColors.accent : "transparent",
            }}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleSwitch;
