import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  headCells: [
    {
      id: nanoid(),
      numeric: false,
      disablePadding: true,
      label: "Email",
    },
    {
      id: nanoid(),
      numeric: true,
      disablePadding: false,
      label: "Publish Date",
    },
    {
      id: nanoid(),
      numeric: true,
      disablePadding: false,
      label: "Sent",
    },
    {
      id: nanoid(),
      numeric: true,
      disablePadding: false,
      label: "Click-through Rate",
    },
    {
      id: nanoid(),
      numeric: true,
      disablePadding: false,
      label: "Delivery Rate",
    },
    {
      id: nanoid(),
      numeric: true,
      disablePadding: false,
      label: "Unsubscribed Rate",
    },
    {
      id: nanoid(),
      numeric: true,
      disablePadding: false,
      label: "Spam Report Rate",
    },
  ],

  rows: [
    {
      id: nanoid(),
      email: "Notio Hive + Musemind",
      publishDate: "1/8/2022",
      sent: 5,
      throughRate: "2.66%",
      deliveryRate: "100%",
      unsubscribed: "100%",
      spam: "0.66%",
      checked: false,
    },
    {
      id: nanoid(),
      email: "Engineering Architecture & Design",
      publishDate: "17/8/2022",
      sent: 1,
      throughRate: "3.04%",
      deliveryRate: "100%",
      unsubscribed: "0.90%",
      spam: "0.00%",
      checked: false,
    },
    {
      id: nanoid(),
      email: "Financial Services",
      publishDate: "19/8/2022",
      sent: 3,
      throughRate: "5.38%",
      deliveryRate: "100%",
      unsubscribed: "0.87%",
      spam: "1.07%",
      checked: false,
    },
    {
      id: nanoid(),
      email: "Advertising & Marketing Agencies",
      publishDate: "20/8/2022",
      sent: 7,
      throughRate: "3.50%",
      deliveryRate: "100%",
      unsubscribed: "0.20%",
      spam: "1.43%",
      checked: false,
    },
    {
      id: nanoid(),
      email: "HealthCare Services",
      publishDate: "24/8/2022",
      sent: 12,
      throughRate: "8.90%",
      deliveryRate: "100%",
      unsubscribed: "0.70%",
      spam: "0.00%",
      checked: false,
    },
    {
      id: nanoid(),
      email: "IT / Tech / Software Services",
      publishDate: "30/8/2022",
      sent: 9,
      throughRate: "7.15%",
      deliveryRate: "100%",
      unsubscribed: "0.99%",
      spam: "0.00%",
      checked: false,
    },

    {
      id: nanoid(),
      email: "Logistics & Whole shale",
      publishDate: "4/9/2022",
      sent: 1,
      throughRate: "2.80%",
      deliveryRate: "100%",
      unsubscribed: "0.92%",
      spam: "8.90%",
      checked: false,
    },
    {
      id: nanoid(),
      email: "Media Entertainment & publishing",
      publishDate: "6/9/2022",
      sent: 1,
      throughRate: "3.44%",
      deliveryRate: "100%",
      unsubscribed: "0.20%",
      spam: "0.00%",
      checked: false,
    },
    {
      id: nanoid(),
      email: "Education",
      publishDate: "10/9/2022",
      sent: 2,
      throughRate: "1.07%",
      deliveryRate: "100%",
      unsubscribed: "0.33%",
      spam: "3.04%",
      checked: false,
    },
    {
      id: nanoid(),
      email: "Consumer Packaged Goods",
      publishDate: "11/9/2022",
      sent: 1,
      throughRate: "1.43%",
      deliveryRate: "100%",
      unsubscribed: "0.50%",
      spam: "1.43%",
      checked: false,
    },
  ],
};

const TableSectionSlice = createSlice({
  initialState,
  name: "Table",
  reducers: {
    handleCheck: (state, action) => {
      const index = state.rows.findIndex((item) => item.id === action.payload);
      state.rows[index].checked = !state.rows[index].checked;
    },

    handleAllCheck: (state, action) => {
      state.rows = state.rows.map((item) => {
        return { ...item, checked: action.payload };
      });
    },
  },
});

export const { handleCheck, handleAllCheck } = TableSectionSlice.actions;
export const selectedData = (state) => state.Table.headCells;
export const selectedRow = (state) => state.Table.rows;
export default TableSectionSlice.reducer;
