import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import classes from "../../StyleContainer/AppBar/AppBar.module.css";
import { useSelector } from "react-redux";
import { selectedData } from "../ReduxSection/DrawerSection/DrawerSlice.js";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
const DrawerList = () => {
  const ListData = useSelector(selectedData);
  return (
    <Box>
      <Box sx={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <TextField
          placeholder="Search"
          size="small"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      {ListData.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText className={classes.text}>{item.text}</ListItemText>
            <ListItemIcon>{item.iconSec}</ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}

      <Box sx={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Email Analytics"
        />
        <ListItemText>Manage</ListItemText>
      </Box>
      <ListItemButton>
        <ListItemIcon>
          <SettingsOutlinedIcon />
        </ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </ListItemButton>
    </Box>
  );
};

export default DrawerList;
