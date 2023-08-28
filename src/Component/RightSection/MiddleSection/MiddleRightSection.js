import React from "react";
import Box from "@mui/material/Box";
import classes from "../../../StyleContainer/RightSection/MiddleSection/SecSection.module.css";
import BarChartSec from "../Charts/BarChartSec";
const MiddleRightSection = () => {
  return (
    <Box sx={{ paddingLeft: "3%" }}>
      <Box className={classes.allEmail}>
        <p className={classes.allEmailText}>Performance By Device Type</p>
        <Box className={classes.dotContainer}>
          <Box className={classes.newFirst}>
            <span className={classes.violetDot}></span>
            <Box
              sx={{
                paddingRight: "3%",
                width: "100%",
              }}
            >
              <p className={classes.rateFirst}>Opened</p>
            </Box>
          </Box>
          <Box className={classes.sec}>
            <span className={classes.blueDot}></span>
            <p className={classes.rateFirst}>Clicks</p>
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "2%" }}>
        <BarChartSec />
      </Box>
    </Box>
  );
};

export default MiddleRightSection;
