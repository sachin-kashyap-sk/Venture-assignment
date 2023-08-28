import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import classes from "../../../StyleContainer/RightSection/BottomSection/BottomSection.module.css";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import TableSection from "./TableSection";
const BottomSection = ({ theme }) => {
  return (
    <Box>
      <Box className={classes.mainContainer}>
        <Box className={classes.btnContainer}>
          <Button
            sx={{ backgroundColor: "#ffff", color: "#3f51b5" }}
            size="small"
            variant="contained"
          >
            Sent Email
          </Button>
          <Box>
            <p className={classes.camText}>Campaigns</p>
          </Box>
        </Box>

        <Box className={classes.lastBtn}>
          <Box>
            <TextField
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <Button
              startIcon={<ViewWeekIcon />}
              sx={{ backgroundColor: "#e1f5fe", color: "#283593" }}
              variant="contained"
            >
              Manage Column
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              startIcon={<FileDownloadOutlinedIcon />}
              Sx={{ backgroundColor: "#d500f9" }}
            >
              Export
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "2%" }}>
        <TableSection theme={theme} />
      </Box>
    </Box>
  );
};

export default BottomSection;
