import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Authprovider } from "./context/authContext.tsx";
import { UserProvider } from "./context/userContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
    <Authprovider>
    <BrowserRouter>

       <App />
    </BrowserRouter>
    </Authprovider>
    </UserProvider>
  </StrictMode>
);