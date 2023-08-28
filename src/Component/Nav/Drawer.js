import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../Theme/Them.js";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Man from "../../Assets/DrawerIcon/man.png";
import classes from "../../StyleContainer/AppBar/AppBar.module.css";
import Button from "@mui/material/Button";
import TopSection from "../RightSection/TopSection/TopSection.js";
import MiddleSection from "../RightSection/MiddleSection/MiddleSection.js";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DrawerList from "./DrawerList.js";
const drawerWidth = 240;

export const PermanentDrawerLeft = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={
          theme.palette.mode === "light"
            ? {
                borderBottom: "2px solid #bdbdbd",
                boxShadow: "none",
                backgroundColor: "#FFFFFF",
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
              }
            : {
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
              }
        }
      >
        <Toolbar>
          <Box className={classes.firstContainer}>
            <Box sx={{ paddingLeft: "2%" }}>
              <p
                className={
                  theme.palette.mode === "light"
                    ? classes.header
                    : classes.header2
                }
              >
                Email Analytics
              </p>
            </Box>
            <Box className={classes.toggleContainer}>
              <Box>
                <IconButton onClick={colorMode.toggleColorMode}>
                  {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </IconButton>
              </Box>

              <Box>
                <Button
                  size="small"
                  variant="outlined"
                  endIcon={<KeyboardArrowDownOutlinedIcon />}
                  sx={
                    theme.palette.mode === "light"
                      ? {
                          color: "#000",
                          borderColor: "#000",
                        }
                      : {
                          color: "#fff",
                          borderColor: "#fff",
                        }
                  }
                >
                  Last 30 days
                </Button>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={
          theme.palette.mode === "light"
            ? {
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }
            : {
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }
        }
      >
        <Box className={classes.manContainer}>
          <img width="32px" height="32px" src={Man} alt="Man" />
          <p style={{ paddingLeft: "5%" }}>DashBoard</p>
        </Box>
        <List>
          <DrawerList />
        </List>
        <Box sx={{ padding: "3%" }}>
          <Box
            className={
              theme.palette.mode === "light"
                ? classes.drawerBottom
                : classes.drawerBottom2
            }
          >
            <Box>
              <img width="32px" height="32px" src={Man} alt="Man" />
            </Box>
            <Box>
              <p className={classes.userText}>Darrell Steward</p>
              <p className={classes.userEmail}>tanya@example.com</p>
            </Box>
            <Box>
              <MoreVertIcon fontSize="small" />
            </Box>
          </Box>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Box>
          <TopSection theme={theme} />
          <MiddleSection theme={theme} />
        </Box>
      </Box>
    </Box>
  );
};

export default PermanentDrawerLeft;
