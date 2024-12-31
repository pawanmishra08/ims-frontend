import { Building2, PackageOpen, ReceiptText, ShoppingCart, User2, UsersRound } from "lucide-react";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <div className="sidebar" style={{ backgroundColor: "#1E201E", color: "white" }}>
      <div style={{ display: "flex", height: 80, alignItems: "center"}}>
      <img src="/vite.svg" height={45} width="100%" />
      </div>
      <ul>
        <li>
          <NavLink to="/products" className={({ isActive }) => isActive ? "active-item" : ""}>
            <PackageOpen />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/sales" className={({ isActive }) => isActive ? "active-item" : ""}>
            <ReceiptText />
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink to="/Users" className={({ isActive }) => isActive ? "active-item" : ""}>
            <User2 />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/Organizations" className={({ isActive }) => isActive ? "active-item" : ""}>
            <Building2 />
            Organization
          </NavLink>
        </li>
        <li>
          <NavLink to="/Customer Vendor" className={({ isActive }) => isActive ? "active-item" : ""}>
            <UsersRound />
            Customer Vendor
          </NavLink>
        </li>
        <li>
          <NavLink to="/Purchase" className={({ isActive }) => isActive ? "active-item" : ""}>
            <ShoppingCart />
            Purchase
          </NavLink>
        </li>
      </ul>
    </div>
  );
};