import { createSlice } from "@reduxjs/toolkit";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import { LuggageOutlined } from "@mui/icons-material";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const initialState = {
  data: [
    {
      id: 1,
      icon: <DashboardOutlinedIcon />,
      text: "Dashboard",
    },
    {
      id: 2,
      icon: <ForumOutlinedIcon />,
      text: "Discuss",
      iconSec: <KeyboardArrowDownOutlinedIcon />,
    },
    {
      id: 3,
      icon: <SubscriptionsOutlinedIcon />,
      text: "Subscription",
    },

    {
      id: 4,
      icon: <ContactPageOutlinedIcon />,
      text: "Contact",
    },
    {
      id: 5,
      icon: <LuggageOutlined />,
      text: "CRM",
      iconSec: <KeyboardArrowDownOutlinedIcon />,
    },
    {
      id: 6,
      icon: <ShoppingBagOutlinedIcon />,
      text: "Sales",
      iconSec: <KeyboardArrowDownOutlinedIcon />,
    },
    {
      id: 7,
      icon: <ReceiptOutlinedIcon />,
      text: "Invoice",
    },
    {
      id: 8,
      icon: <SendOutlinedIcon />,
      text: "Email Marketing",
      iconSec: <KeyboardArrowUpOutlinedIcon />,
    },
  ],
};

export const DrawerSlice = createSlice({
  initialState,
  name: "DrawerData",
  reducers: {},
});
export const selectedData = (state) => state.DrawerData.data;
export default DrawerSlice.reducer;
