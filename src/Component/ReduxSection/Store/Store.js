import { configureStore } from "@reduxjs/toolkit";
import TopSection from "../RightSection/TopSection/TopSectionSlice";
import MiddleSectionSlice from "../RightSection/MiddleSection/MiddleSectionSlice";
import Table from "../RightSection/TableSection/TableSectionSlice";
import DrawerData from "../DrawerSection/DrawerSlice";
export const Store = configureStore({
  reducer: {
    TopSection: TopSection,
    MiddleSectionSlice: MiddleSectionSlice,
    Table: Table,
    DrawerData: DrawerData,
  },
});

export default Store;
