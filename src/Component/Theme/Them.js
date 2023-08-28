import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PermanentDrawerLeft } from "../Nav/Drawer";
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const ToggleColorMode = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <PermanentDrawerLeft />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};
