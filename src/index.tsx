import React from "react";
import ReactDOM from "react-dom/client";
import { Maine } from "main";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "##ff8400",
    },
    success: {
      main: "#95c289",
    },
    secondary: {
      main: "#efc918",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Maine />
    </ThemeProvider>
  </React.StrictMode>
);
