import "./App.css";
import Header from "./components/header";
import product from "./pages/products";
import Products from "./pages/products";
import Addproduct from "./pages/products/addproduct";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Header />
      <AppRoutes />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/add" element={<Addproduct />} />
      {/* Add Sales Routes */}
    </Routes>
  )
}

export default App;