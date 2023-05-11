import { grey } from "@mui/material/colors";
import { frFR } from "@mui/material/locale";
import { ThemeOptions, createTheme } from "@mui/material/styles";
import { Antonio } from "next/font/google";

export const antonio = Antonio({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif", "Arial"],
});

const theme: ThemeOptions = {
  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontSize: 40,
      color: grey[800],
      fontFamily: antonio.style.fontFamily,
    },
    h2: {
      fontSize: 30,
      fontWeight: 100,
      fontFamily: antonio.style.fontFamily,
    },
    h3: {
      fontSize: 25,
      fontFamily: "sans-serif",
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
      color: "rgba(0, 0, 0, 0.6)",
      fontSize: 14,
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
