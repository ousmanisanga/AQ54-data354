import React, { useState, useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";

const Table = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");

  // Configuration des colonnes
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id", 
      },
      {
        Header: "Unité",
        accessor: "unit",
      },
      {
        Header: "Capteur",
        accessor: "sensor",
      },
      {
        Header: "Valeur",
        accessor: "value",
      },
      {
        Header: "Date ",
        accessor: "timestamp",
      },
      
    ],
    []
  );

  // Utilisation de React Table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, 
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setGlobalFilter,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, 
    },
    useGlobalFilter, // Utilisation de la recherche globale
    usePagination // Utilisation de la pagination
  );

  // Gestion de la recherche
  const handleSearchChange = (e) => {
    const value = e.target.value || "";
    setGlobalFilter(value);
    setSearchInput(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recherche..."
        value={searchInput}
        onChange={handleSearchChange}
        className="border p-2 mb-4"
      />
      <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-4 py-2 m-2 border"
        >
          Précédent
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} sur {pageOptions.length}
          </strong>{" "}
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-4 py-2 m-2 border"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Table;
