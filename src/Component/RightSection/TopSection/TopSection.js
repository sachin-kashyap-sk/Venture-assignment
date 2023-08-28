import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { useSelector } from "react-redux";
import { selectedData } from "../../ReduxSection/RightSection/TopSection/TopSectionSlice";
import classes from "../../../StyleContainer/RightSection/TopSection/TopSection.module.css";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
const TopSection = ({ theme }) => {
  const TopSecData = useSelector(selectedData);
  return (
    <Box>
      <Box
        className={
          theme.palette.mode === "light"
            ? classes.mainContainer
            : classes.mainContainer2
        }
      >
        {TopSecData.map((item) => (
          <Box key={item.id} className={classes.cardContainer}>
            <Box className={classes.sentContainer}>
              <p
                className={
                  theme.palette.mode === "light"
                    ? classes.sentText
                    : classes.sentText2
                }
              >
                {item.title}
              </p>
              <OpenInNewOutlinedIcon fontSize="small" />
            </Box>
            <Box className={classes.countContainer}>
              <p
                className={
                  theme.palette.mode === "light"
                    ? classes.count
                    : classes.count2
                }
              >
                {item.count}
              </p>
              <Box>
                <Chip
                  color={item.chipColor}
                  className={classes.chipText}
                  size="small"
                  icon={item.chipIcon}
                  label={item.chipText}
                />
              </Box>
            </Box>
            <Box className={classes.lastTitle}>
              <p className={classes.emailText}>{item.emailCount}</p>
              <p style={{ paddingLeft: "2%" }} className={classes.emailText}>
                {item.subTitle}
              </p>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className={classes.bottomTop}>
        <p className={classes.firstText}>Delivery</p>
        <p className={classes.secText}>SAVE REPORT</p>
      </Box>
    </Box>
  );
};

export default TopSection;
