import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Products from "./pages/products";
import AddProduct from "./pages/products/addproduct";
import Login from "./pages/auth/login";
import Sales from "././pages/sales";
import AppLayout from "./pages/appLayout";
import { useAuth } from "./context/authContext";
import ProductDetail from "./pages/products/productDetail";
import SignUp from "./pages/auth/signup";
import Organizations from "./pages/organizations";
import AddOrganizations from "./pages/organizations/addorganizations";
import AddSales from "./pages/sales/addsales";

//redirects to login page if the user is not authenticated
const ProtectedRoutes = () => {
  const token = useAuth();
  return !!token ? <AppLayout /> : <Navigate to={"/login"} />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={< SignUp/>} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route index path="/" element={<Products />} />
        <Route index path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/add" element={<AddSales/>}  />
        <Route path="/organizations" element ={<Organizations />} />
        <Route path="/organizations/add" element ={<AddOrganizations />} />
        <Route path="*" element={<p>Page Not Found!!!!!</p>} />
      </Route>
      /* {/* <Route path="/" element={<Sales />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/sales/add" element={<AddSales />} /> */}
      {/* Add Sales Routes */}
    </Routes>
  );
}

export default App;
