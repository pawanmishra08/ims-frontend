import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Authprovider } from "./context/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Authprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Authprovider>
  </StrictMode>
);