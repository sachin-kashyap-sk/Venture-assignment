import { createSlice, nanoid } from "@reduxjs/toolkit";
// import extendedLink from "../../../../Assets/RightSection/TopSection/externalLink.png";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
const initialState = {
  Data: [
    {
      id: nanoid(),
      title: "Sent",
      icon: <LaunchOutlinedIcon />,
      count: 1181,
      chipIcon: <ArrowOutwardSharpIcon />,
      chipText: 0.5,
      emailCount: 104,
      subTitle: "Emails",
      chipColor: "success",
    },
    {
      id: nanoid(),
      title: "Open Rate",
      icon: <LaunchOutlinedIcon />,

      count: "86.84%",
      chipIcon: <SouthEastIcon />,
      chipText: "1.7%",
      emailCount: 13,
      subTitle: "Opened",
      chipColor: "error",
    },
    {
      id: nanoid(),
      title: "Click Rate",
      icon: <LaunchOutlinedIcon />,

      count: "2.63%",
      chipIcon: <SouthEastIcon />,
      chipText: "2.3%",
      emailCount: 1,
      subTitle: "Clicked",
      chipColor: "error",
    },
    {
      id: nanoid(),
      title: "Click through",
      icon: <LaunchOutlinedIcon />,
      count: "3.03%",
      chipIcon: <ArrowOutwardSharpIcon />,
      chipText: "1.0%",
      emailCount: 15,
      subTitle: "Click Through",
      chipColor: "success",
    },
  ],
};

export const TopSection = createSlice({
  name: "TopSection",
  initialState,
  reducers: {},
});

export const selectedData = (state) => state.TopSection.Data;
export default TopSection.reducer;
