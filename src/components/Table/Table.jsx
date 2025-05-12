/**
 * CRMTable Component
 * Displays and manages a customizable CRM table with features like:
 * - Inline editing
 * - Drag and drop reordering
 * - Column visibility toggling
 * - CSV export
 *
 * Props:
 * - data: Array of row data
 * - setData: Function to update a row
 * - onReorder: Callback to update reordered data
 */

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Link,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import Dropdown from "../Dropdown/Dropdown";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { roles } from "../../data/mockData";
import colors from "../../data/colors";
import {
  exportToCSV,
  isValidEmail,
  isValidPhone,
  isValidWebsite,
} from "../../Utils/utils";
import { useSelector } from "react-redux";
import MultiSelectDropdown from "../MultiSelectDropdown/MultiSelectDropdown";
import Button from "../Button/Button";
import RoleChip from "../Chips/Chips";

// Column headers
const headers = [
  "Name",
  "Email",
  "Phone",
  "Website",
  "Joined",
  "Role",
  "Status",
  "Actions",
];

const CRMTable = ({ data, setData, onReorder }) => {
  const [editRowId, setEditRowId] = useState(null);
  const [editedRow, setEditedRow] = useState({});
  const [errors, setErrors] = useState({});
  const [draggedRowIndex, setDraggedRowIndex] = useState(null);
  const theme = useSelector((state) => state.theme.mode);
  const [cols, setCols] = useState(headers); // selected columns

  // Enter edit mode for a row
  const handleEdit = (row) => {
    setEditRowId(row.id);
    setEditedRow({ ...row });
    setErrors({});
  };

  // Validate input fields
  const validateFields = () => {
    const newErrors = {};
    if (!editedRow.name?.trim()) newErrors.name = true;
    if (!editedRow.email?.trim() || !isValidEmail(editedRow.email))
      newErrors.email = true;
    if (!editedRow.phone?.trim() || !isValidPhone(editedRow.phone))
      newErrors.phone = true;
    const isValidDate = !isNaN(Date.parse(editedRow.joined));
    if (!editedRow.joined || !isValidDate) newErrors.joined = true;
    if (!editedRow.website?.trim() || !isValidWebsite(editedRow.website))
      newErrors.website = true;
    if (!editedRow.role?.trim()) newErrors.role = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save row after validation
  const handleSave = () => {
    if (!validateFields()) return;
    setData(editedRow);
    setEditRowId(null);
  };

  // Update form field value
  const handleChange = (field, value) => {
    setEditedRow((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  // Drag-and-drop logic
  const handleDragStart = (index) => {
    setDraggedRowIndex(index);
  };

  const handleDrop = (index) => {
    if (draggedRowIndex === null || draggedRowIndex === index) return;
    const updated = [...data];
    const [movedItem] = updated.splice(draggedRowIndex, 1);
    updated.splice(index, 0, movedItem);
    setDraggedRowIndex(null);
    onReorder && onReorder(updated); // Update parent state
  };

  // Input styling based on error
  const inputStyle = (hasError) => ({
    border: "none",
    borderBottom: `2px solid ${
      hasError ? colors[theme]?.error : colors[theme]?.border
    }`,
    padding: "4px 6px",
    outline: "none",
    width: "100%",
    background: "transparent",
    color: colors[theme]?.textPrimary,
  });

  const rowStyle = {
    color: colors[theme]?.textPrimary,
    borderColor: colors[theme]?.border,
    cursor: "default",
    minWidth: "160px",
    width: "auto",
  };

  return (
    <div className="gap-4 flex flex-col">
      {/* Column Selector and Export Button */}
      <div className="gap-4 flex flex-row">
        <div className="w-[140px]">
          <label className="font-bold">Select Columns</label>
          <MultiSelectDropdown
            options={headers}
            selected={cols}
            onChange={(data) => setCols(data)}
          />
        </div>
        <Button label="Export .csv" onClick={() => exportToCSV(data)} />
      </div>

      {/* Table */}
      <TableContainer
        component={Paper}
        style={{
          background: colors[theme]?.surface,
          color: colors[theme]?.textPrimary,
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  backgroundColor: colors[theme]?.surface,
                  borderColor: colors[theme]?.border,
                }}
              />
              {headers.map((header) =>
                cols.includes(header) ? (
                  <TableCell
                    key={header}
                    style={{
                      fontWeight: "bold",
                      color: colors[theme]?.textSecondary,
                      backgroundColor: colors[theme]?.surface,
                      borderColor: colors[theme]?.border,
                    }}
                  >
                    {header}
                  </TableCell>
                ) : null
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, index) => {
              const isEditing = row.id === editRowId;

              return (
                <TableRow
                  key={row.id}
                  draggable={!isEditing}
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(index)}
                  style={{ cursor: !isEditing ? "move" : "default" }}
                >
                  <TableCell
                    style={{
                      width: "40px",
                      padding: "8px",
                      borderColor: colors[theme]?.border,
                    }}
                  >
                    {!isEditing && (
                      <DragIndicatorIcon
                        style={{
                          cursor: "grab",
                          color: colors[theme]?.textSecondary,
                        }}
                      />
                    )}
                  </TableCell>

                  {cols.includes("Name") && (
                    <TableCell style={rowStyle}>
                      {isEditing ? (
                        <input
                          value={editedRow.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          style={inputStyle(errors.name)}
                          placeholder="Name"
                        />
                      ) : row.name ? (
                        <Link
                          href={`/users/${row.id}`}
                          underline="hover"
                          style={{
                            color: colors[theme].textPrimary,
                          }}
                        >
                          {row.name}
                        </Link>
                      ) : (
                        "NA"
                      )}
                    </TableCell>
                  )}

                  {cols.includes("Email") && (
                    <TableCell style={rowStyle}>
                      {isEditing ? (
                        <input
                          value={editedRow.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          style={inputStyle(errors.email)}
                          placeholder="Email"
                        />
                      ) : row.email ? (
                        <Link href={`mailto:${row.email}`} underline="hover">
                          <EmailIcon fontSize="small" /> {row.email}
                        </Link>
                      ) : (
                        "NA"
                      )}
                    </TableCell>
                  )}

                  {cols.includes("Phone") && (
                    <TableCell style={rowStyle}>
                      {isEditing ? (
                        <input
                          value={editedRow.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          style={inputStyle(errors.phone)}
                          placeholder="Phone"
                        />
                      ) : row.phone ? (
                        <Link href={`tel:${row.phone}`} underline="hover">
                          <PhoneIcon fontSize="small" /> {row.phone}
                        </Link>
                      ) : (
                        "NA"
                      )}
                    </TableCell>
                  )}

                  {cols.includes("Website") && (
                    <TableCell style={rowStyle}>
                      {isEditing ? (
                        <input
                          value={editedRow.website}
                          onChange={(e) =>
                            handleChange("website", e.target.value)
                          }
                          style={inputStyle(errors.website)}
                          placeholder="Website"
                        />
                      ) : row.website ? (
                        <Link
                          href={row.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="hover"
                        >
                          🌐 {row.website}
                        </Link>
                      ) : (
                        "NA"
                      )}
                    </TableCell>
                  )}

                  {cols.includes("Joined") && (
                    <TableCell style={{ ...rowStyle, minWidth: "80px" }}>
                      {isEditing ? (
                        <input
                          type="date"
                          value={
                            editedRow.joined &&
                            !isNaN(new Date(editedRow.joined).getTime())
                              ? new Date(
                                  new Date(editedRow.joined).getTime() -
                                    new Date().getTimezoneOffset() * 60000
                                )
                                  .toISOString()
                                  .slice(0, 10)
                              : ""
                          }
                          onChange={(e) =>
                            handleChange("joined", e.target.value)
                          }
                          style={inputStyle(errors.joined)}
                        />
                      ) : isNaN(new Date(row.joined).getTime()) ? (
                        "NA"
                      ) : (
                        <>
                          <CalendarTodayIcon
                            fontSize="small"
                            className="mr-1"
                          />
                          {new Date(row.joined).toLocaleDateString("en-GB")}
                        </>
                      )}
                    </TableCell>
                  )}

                  {cols.includes("Role") && (
                    <TableCell style={{ ...rowStyle, minWidth: "140px" }}>
                      {isEditing ? (
                        <Dropdown
                          value={editedRow.role}
                          options={roles}
                          onChange={(val) => handleChange("role", val)}
                          error={errors.role}
                        />
                      ) : (
                        <RoleChip role={row.role || "NA"} />
                      )}
                    </TableCell>
                  )}

                  {cols.includes("Status") && (
                    <TableCell style={{ ...rowStyle, minWidth: "80px" }}>
                      {isEditing ? (
                        <ToggleSwitch
                          options={["Active", "Inactive"]}
                          value={editedRow.active ? "Active" : "Inactive"}
                          onToggle={(val) =>
                            handleChange("active", val === "Active")
                          }
                        />
                      ) : (
                        <span
                          style={{
                            color: row.active
                              ? colors[theme]?.success
                              : colors[theme]?.error,
                          }}
                        >
                          {typeof row.active === "boolean"
                            ? row.active
                              ? "Active"
                              : "Inactive"
                            : "NA"}
                        </span>
                      )}
                    </TableCell>
                  )}

                  {cols.includes("Actions") && (
                    <TableCell style={{ ...rowStyle, minWidth: "80px" }}>
                      <IconButton
                        onClick={() =>
                          isEditing ? handleSave() : handleEdit(row)
                        }
                        color="primary"
                      >
                        {isEditing ? <SaveIcon /> : <EditIcon />}
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CRMTable;
