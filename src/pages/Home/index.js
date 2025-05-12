/**
 * Home Component
 * A dashboard-like page displaying filtered CRM data with:
 * - Search, role & status filters
 * - Pagination
 * - Theme toggling
 * - Inline table editing
 * - Row reordering with update merge logic
 */

import React, { useState, useMemo, useEffect } from "react";
import Table from "../../components/Table/Table";
import Search from "../../components/Search/Search";
import Pagination from "../../components/Pagination/Pagination";
import initialMockData, { roles, status } from "../../data/mockData";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/action/theme";
import colors from "../../data/colors";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import Button from "../../components/Button/Button";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

const ITEMS_PER_PAGE = 5;

const Home = () => {
  const [data, setData] = useState(initialMockData);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    role: "",
    currentPage: 1,
  });

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  // Update filters and reset to page 1 (except for page changes)
  const updateFilters = (key, val) => {
    setFilters((prev) => ({
      ...prev,
      [key]: val,
      currentPage: key === "currentPage" ? val : 1,
    }));
  };

  // Filter data by search, status, and role
  const filteredData = useMemo(() => {
    let result = data;

    if (filters?.search?.trim()) {
      result = result.filter((item) =>
        item?.name?.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    result = result
      .filter((item) =>
        filters.status
          ? filters.status === "Active"
            ? item?.active
            : !item?.active
          : true
      )
      .filter((item) => (filters.role ? item.role === filters.role : true));

    return result;
  }, [filters, data]);

  // Get paginated subset of filtered data
  const paginatedData = useMemo(() => {
    const start = (filters.currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, filters.currentPage]);

  // Update page background based on selected theme
  useEffect(() => {
    document.body.style.background = colors[theme]?.background;
  }, [theme]);

  // Replace paginated slice of original data with reordered slice
  const updateOrder = (newSlice) => {
    const startIndex = (filters.currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    setData((prev) => {
      const updated = [...prev];
      updated.splice(startIndex, ITEMS_PER_PAGE, ...newSlice);
      return updated;
    });
  };

  return (
    <div
      className="md:p-16 p-6"
      style={{
        color: colors[theme]?.textPrimary,
        background: colors[theme]?.background,
      }}
    >
      {/* Filter controls */}
      <div className="flex md:flex-row flex-col gap-8">
        <div>
          <label className="font-bold">Search by name</label>
          <Search
            value={filters.search}
            onChange={(text) => updateFilters("search", text)}
          />
        </div>

        <div>
          <label className="font-bold">Select Role</label>
          <Dropdown
            options={roles}
            value={filters.role}
            onChange={(option) => updateFilters("role", option)}
            unselect={true}
          />
        </div>

        <div>
          <label className="font-bold">Select Status</label>
          <Dropdown
            options={status}
            value={filters.status}
            onChange={(option) => updateFilters("status", option)}
            unselect={true}
          />
        </div>

        <div className="flex flex-row gap-8 justify-between items-start">
          <Button
            label="Reset Filters"
            onClick={() => {
              setFilters({ search: "", status: "", role: "", currentPage: 1 });
            }}
          />
          <div>
            <ToggleSwitch
              options={["Dark", "Light"]}
              value={theme}
              onToggle={(option) => dispatch(setTheme(option))}
              label={"Select theme"}
            />
          </div>
        </div>
      </div>

      {/* Table or no data message */}
      {filteredData.length > 0 ? (
        <>
          <div className="py-8">
            <Table
              data={paginatedData}
              setData={(editedItem) => {
                setData((prev) =>
                  prev.map((item) =>
                    item.id === editedItem.id ? editedItem : item
                  )
                );
              }}
              onReorder={updateOrder}
            />
          </div>

          <div>
            <Pagination
              totalItems={filteredData.length}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={filters.currentPage}
              onPageChange={(page) => updateFilters("currentPage", page)}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <SearchOffIcon fontSize="large" style={{ marginBottom: "0.5rem" }} />
          <div>No data found</div>
        </div>
      )}
    </div>
  );
};

export default Home;
