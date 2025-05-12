import React from "react";
import colors from "../../data/colors";
import { useSelector } from "react-redux";

/**
 * Button Component
 * A reusable button that adapts to the current theme color.
 *
 * Props:
 * - label: Text displayed on the button (default is "Click")
 * - onClick: Callback function triggered on click
 */
const Button = ({ label = "Click", onClick }) => {
  const theme = useSelector((state) => state.theme.mode);

  const themeColors = colors[theme];

  return (
    <button
      onClick={onClick}
      className="px-5 py-2 rounded-lg font-semibold text-white transition-colors duration-300 h-[40px]"
      style={{
        backgroundColor: themeColors.accent, 
      }}

      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = themeColors.hover;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = themeColors.accent;
      }}
    >
      {label}
    </button>
  );
};

export default Button;
