import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Authprovider } from "./context/authContext.tsx";
import { UserProvider } from "./context/userContext.tsx";
import { Store } from "lucide-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
    <Authprovider store = { Store }>
    <BrowserRouter>

       <App />
    </BrowserRouter>
    </Authprovider>
    </UserProvider>
  </StrictMode>
);