import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Products from "././pages/products";
import AddProduct from "././pages/products/addproduct";
import Login from "./pages/auth/login";
import Sales from "././pages/sales";
import AppLayout from "./pages/appLayout";
//import { useAuth } from "./context/authContext";
import ProductDetail from "./pages/products/productDetail";
import CreateOrganization from "./pages/auth/createOrganization";
import sales from './pages/sales';

//redirects to login page if the user is not authenticated
const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");
  return !!token ? <AppLayout /> : <Navigate to={"/login"} />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="/organization/add" element={<CreateOrganization />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="*" element={<p>Page Not Found!!!!!</p>} />
      </Route>
      {/* {/* <Route path="/" element={<Sales />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/sales/add" element={<AddSales />} /> */}
      */
      {/* Add Sales Routes */}
    </Routes>
  );
}

export default App;
