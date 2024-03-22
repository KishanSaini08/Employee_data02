import React, { useMemo } from 'react';
import { useTable, useSortBy, useFilters, useGlobalFilter } from 'react-table';
import "./App.css"



const Datagrid = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
    { Header: 'Customer', 
      accessor: 'name', 
      Cell: ({ row }) => (
        <>
          <img src={row.original.photo} alt="customer" style={{ width: 50 , height:50, borderRadius:50 }} />
          {row.original.name}
        </>
      )
    },
    { Header: 'Order', accessor: 'order' },
    { Header: 'Total Spent', accessor: 'totelspent' },
    { Header: 'Email', accessor: 'email' }, // Add Email column
    { Header: 'Salary', accessor: 'salary' }, // Add Salary column
    { Header: 'Last Seen', accessor: 'lastSeen' },
    { Header: 'Last Purchase', accessor: 'lastPurchase' }, // Add Last Purchase column
  ],
  []
  );
  
  const { getTableProps,getTableBodyProps,headerGroups,rows, prepareRow,state,setGlobalFilter,} = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};


export default Datagrid;



