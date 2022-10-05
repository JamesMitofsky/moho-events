import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/antonio";
import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "'Antonio', sans-serif",
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
          <Helmet>
            <title>Moho Events</title>
          </Helmet>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
