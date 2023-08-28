import React from "react";
import Box from "@mui/material/Box";
import classes from "../../../StyleContainer/RightSection/MiddleSection/SecSection.module.css";
import LineChartGraph from "../Charts/LineChart";
import MiddleRightSection from "./MiddleRightSection";

const SecSection = () => {
  return (
    <Box>
      <Box className={classes.mainContainer}>
        <Box className={classes.firstContainer}>
          <Box className={classes.allEmail}>
            <p className={classes.allEmailText}>Email Data Chart</p>
            <Box className={classes.dotContainer}>
              <Box className={classes.first}>
                <span className={classes.violetDot}></span>
                <Box
                  sx={{
                    paddingRight: "3%",
                    width: "100%",
                  }}
                >
                  <p className={classes.rateFirst}>Click through rate</p>
                </Box>
              </Box>
              <Box className={classes.sec}>
                <span className={classes.blueDot}></span>
                <p className={classes.rateFirst}>Open rate</p>
              </Box>
            </Box>
          </Box>
          <Box sx={{ paddingTop: "2%" }}>
            <LineChartGraph />
          </Box>
        </Box>

        <Box className={classes.secContainer}>
          <MiddleRightSection />
        </Box>
      </Box>
    </Box>
  );
};

export default SecSection;
