import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom";
import { DarkModeContextProvider } from "./context/darkModeContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
