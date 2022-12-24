import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F48B1C",
    },
    secondary: {
      main: "#F48B1C",
    },
    error: {
      main: "#de2e39",
    },
  },
  typography: {
    fontFamily: ["Exo", "sans-serif"],
  },
  breakpoints: {
    values: {
      xs: 0,
      vs: 300,
      sm: 576,
      md: 768,
      lg: 992,
      vl: 1200,
      xl: 1400,
    },
  },
});
