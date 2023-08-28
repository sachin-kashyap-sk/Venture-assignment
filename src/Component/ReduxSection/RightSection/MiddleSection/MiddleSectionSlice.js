import { createSlice, nanoid } from "@reduxjs/toolkit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const initialState = {
  Data: [
    {
      id: nanoid(),
      title: "Delevered Rate",
      icon: <InfoOutlinedIcon />,
      percent: 100,
      subTitle: "38 Delivered",
      chartColor: "#e0e0e0",
      chartData: [
        {
          uv: 1000,
        },
        {
          uv: 4000,
        },
        {
          uv: 2000,
        },
        {
          uv: 2780,
        },
        {
          uv: 2000,
        },
        {
          uv: 2000,
        },
        {
          uv: 2700,
        },
      ],
    },

    {
      id: nanoid(),
      title: "Hard Bounce Rate",
      icon: <InfoOutlinedIcon />,
      percent: 85,
      subTitle: "",
      chartColor: "#651fff",
      chartData: [
        {
          uv: 5000,
        },
        {
          uv: 4000,
        },
        {
          uv: 2000,
        },
        {
          uv: 2780,
        },
        {
          uv: 2000,
        },
        {
          uv: 2000,
        },
        {
          uv: 2700,
        },
      ],
    },

    {
      id: nanoid(),
      title: "Unsubscribed Rate",
      icon: <InfoOutlinedIcon />,
      percent: 28,
      // subTitle: "38 Delivered",
      chartColor: "#e0e0e0",
      chartData: [
        {
          uv: 1000,
        },
        {
          uv: 4000,
        },
        {
          uv: 2000,
        },
        {
          uv: 2780,
        },
        {
          uv: 2000,
        },
        {
          uv: 2000,
        },
        {
          uv: 2700,
        },
      ],
    },

    {
      id: nanoid(),
      title: "Spam Report Rate",
      icon: <InfoOutlinedIcon />,
      percent: 0.7,
      // subTitle: "38 Delivered",
      chartColor: "#e0e0e0",
      chartData: [
        {
          uv: 1000,
        },
        {
          uv: 4000,
        },
        {
          uv: 2000,
        },
        {
          uv: 2780,
        },
        {
          uv: 2000,
        },
        {
          uv: 2000,
        },
        {
          uv: 2700,
        },
      ],
    },
  ],
};

const MiddleSectionSlice = createSlice({
  initialState,
  name: "MiddleSectionSlice",

  reducers: {},
});

export const selectedData = (state) => state.MiddleSectionSlice.Data;
export default MiddleSectionSlice.reducer;
