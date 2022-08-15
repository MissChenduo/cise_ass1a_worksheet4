import React, {useMemo} from "react";
import articles from "../dummydata/articles.js";
import { useTable, useSortBy, usePagination } from 'react-table';
const Table = ({columns, data}) => {
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    
    useSortBy,
    usePagination
  )