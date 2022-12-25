import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#1c2025",
    },
    dark: {
      main: "#16191E",
    },
  },
  typography: {
    fontFamily: "Exo",
    button: {
      textTransform: "none",
    },
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
