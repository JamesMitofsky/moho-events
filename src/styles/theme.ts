import { frFR } from "@mui/material/locale";
import { ThemeOptions, createTheme } from "@mui/material/styles";

const theme: ThemeOptions = {
  typography: {
    fontFamily: ["sans-serif"].join(","),
    h1: {
      fontSize: 60,
      fontFamily: "'Antonio', sans-serif",
    },
    h2: {
      fontSize: 40,
      fontFamily: "'Antonio', sans-serif",
    },
    h3: {
      fontSize: 30,
      fontFamily: "'Antonio', sans-serif",
    },
    h4: {
      fontSize: 20,
      fontFamily: "sans-serif",
    },
    subtitle1: {
      fontWeight: 100,
      color: "rgba(0, 0, 0, 0.6)",
      fontSize: 17,
    },
    subtitle2: {
      fontWeight: 100,
      color: "rgb(241, 103, 96)",
      fontSize: 17,
    },
  },
  palette: {
    primary: {
      main: "rgb(241, 103, 96)",
    },
    secondary: {
      main: "rgb(254,248,76)",
    },
  },
};

const localizedTheme = createTheme(theme, frFR);

export default localizedTheme;
