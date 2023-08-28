import React from "react";
import Box from "@mui/material/Box";
import classes from "../../../StyleContainer/RightSection/MiddleSection/MiddleSection.module.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BarChartPlain from "../Charts/BarChatPlain";
import { selectedData } from "../../ReduxSection/RightSection/MiddleSection/MiddleSectionSlice";
import { useSelector } from "react-redux";
import SecSection from "./SecSection";
import BottomSection from "../BottomSection/BottomSection";
const MiddleSection = ({ theme }) => {
  const data = useSelector(selectedData);
  return (
    <Box>
      <Box className={classes.mainContainer}>
        {data.map((item) => (
          <Box className={classes.cardContainer} key={item.id}>
            <Box className={classes.info}>
              <p className={classes.deliveryText}>{item.title}</p>
              <InfoOutlinedIcon fontSize="small" />
            </Box>
            <p className={classes.percent}>{item.percent}%</p>
            <Box>
              <p className={classes.lastText}>{item.subTitle}</p>
            </Box>
            <Box>
              <BarChartPlain item={item} />
            </Box>
          </Box>
        ))}
      </Box>
      <SecSection />
      <Box>
        <Box className={classes.emailPerformance}>
          <p className={classes.performanceText}>All Email Parformance</p>
          <InfoOutlinedIcon fontSize="small" />
        </Box>
      </Box>
      <BottomSection theme={theme} />
    </Box>
  );
};

export default MiddleSection;
