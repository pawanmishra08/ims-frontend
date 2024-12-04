import './App.css'
import { Route, Routes } from 'react-router';
import Products from '././pages/products';
import AddProduct from '././pages/products/addproduct';
import Login from './pages/auth/login';
// import Sales from '././pages/sales';
// import AddSales from '././pages/sales/addSales';


function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      <AppRoutes />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path= "/login" element={<Login/>}/>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/add" element={<AddProduct />} />
      {/* <Route path="/" element={<Sales />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/sales/add" element={<AddSales />} /> */}


      {/* Add Sales Routes */}
    </Routes>
  )
}

export default App;