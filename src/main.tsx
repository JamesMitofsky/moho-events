import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/antonio";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MetaTags from "./components/MetaTags";

const theme = createTheme({
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
    subtitle1: {
      fontWeight: 100,
      color: "rgba(0, 0, 0, 0.6)",
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
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MetaTags title="Moho Events" />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
