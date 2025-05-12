/**
 * UserDetails Component
 * Displays detailed user profile info fetched from mock data based on route `id`.
 */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import mockData from "../../data/mockData";
import colors from "../../data/colors";
import ErrorIcon from '@mui/icons-material/Error';
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const theme = useSelector((state) => state.theme.mode);
  const { id } = useParams(); // Get user ID from route

  // Fetch user details on mount or when ID changes
  useEffect(() => {
    const u = mockData.find((item) => item.id == id);
    setUser(u);
  }, [id]);

  const themeColors = colors[theme];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: themeColors.background }}
    >
      {user && user?.id ? (
        <div
          className="w-full max-w-md rounded-2xl shadow-md p-6"
          style={{
            backgroundColor: themeColors.surface,
            border: `1px solid ${themeColors.border}`,
          }}
        >
          {/* Avatar and basic info */}
          <div className="flex flex-col items-center">
            <img
              src={`https://i.pravatar.cc/150?img=${(user.id % 70) + 1}`}
              alt="User Avatar"
              className="w-24 h-24 rounded-full mb-4 border-2"
              style={{ borderColor: themeColors.accent }}
            />
            <h2
              className="text-2xl font-bold"
              style={{ color: themeColors.textPrimary }}
            >
              {user.name}
            </h2>
            <span
              className="mt-1 text-sm font-medium"
              style={{
                color: user.active ? themeColors.success : themeColors.error,
              }}
            >
              {user.active ? "Active" : "Inactive"}
            </span>
          </div>

          {/* Contact and metadata */}
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold" style={{ color: themeColors.textPrimary }}>
                Email:
              </span>
              <a
                href={`mailto:${user.email}`}
                className="hover:underline"
                style={{ color: themeColors.accent }}
              >
                {user.email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold" style={{ color: themeColors.textPrimary }}>
                Phone:
              </span>
              <a
                href={`tel:${user.phone}`}
                className="hover:underline"
                style={{ color: themeColors.accent }}
              >
                {user.phone}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold" style={{ color: themeColors.textPrimary }}>
                Website:
              </span>
              <a
                href={user.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: themeColors.accent }}
              >
                {user.website}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold" style={{ color: themeColors.textPrimary }}>
                Joined:
              </span>
              <span style={{ color: themeColors.textSecondary }}>
                {new Date(user.joined).toLocaleDateString("en-GB")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold" style={{ color: themeColors.textPrimary }}>
                Role:
              </span>
              <span style={{ color: themeColors.textSecondary }}>
                {user.role}
              </span>
            </div>
          </div>
        </div>
      ) : (
        // No user found case
        <div className="flex flex-col items-center justify-center py-16">
          <ErrorIcon fontSize="large" style={{ marginBottom: "0.5rem" }} />
          <div>No User found</div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
