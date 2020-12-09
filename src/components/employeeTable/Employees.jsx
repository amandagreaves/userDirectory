import React, { useState } from 'react';

import { kaReducer, Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import "./style.css";

const dataArray = Array(10).fill(undefined).map(
  (index) => ({
    column1: `column:1 row:${index}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    column4: `column:4 row:${index}`,
    id: index,
  }),
);

const tablePropsInit = {
  columns: [
    { key: 'column1', title: 'Name', dataType: DataType.String },
    { key: 'column2', title: 'Email', dataType: DataType.String },
    { key: 'column3', title: 'Phone', dataType: DataType.String },
    { key: 'column4', title: 'Username', dataType: DataType.String },
  ],
  data: dataArray,
  editingMode: EditingMode.Cell,
  rowKeyField: 'id',
  sortingMode: SortingMode.Single,
};


const OverviewDemo = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));
  };

  return (
    <Table
      {...tableProps}
      dispatch={dispatch}
    />
  );
};

export default OverviewDemo;
