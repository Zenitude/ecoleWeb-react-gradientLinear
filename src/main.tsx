import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./utils/context/Context";
import Home from "./pages/Home/Home";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <Home />
    </ContextProvider>
  </React.StrictMode>,
)
