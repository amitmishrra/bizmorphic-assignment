import React from "react";

// Role to color mapping
const roleColors = {
  Admin: "#ff6b6b",
  Write: "#6c5ce7",
  Read: "#00b894",
  "Read + Write": "#fdcb6e",
  Default: "#b2bec3",
};

/**
 * RoleChip Component
 * A reusable chip that displays the user's role with a corresponding color.
 *
 * Props:
 * - role: The role name to display (e.g., "Admin", "Read + Write")
 */
const RoleChip = ({ role }) => {
  // Get color for the role or fallback to default
  const color = roleColors[role] || roleColors.Default;

  return (
    <span
      style={{
        backgroundColor: color,
        color: "#fff",
        padding: "4px 12px",
        borderRadius: "9999px",
        fontSize: "0.85rem",
        fontWeight: 500,
        textTransform: "capitalize",
        display: "inline-block",
      }}
    >
      {role || "NA"}
    </span>
  );
};

export default RoleChip;
