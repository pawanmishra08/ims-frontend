import { Bell, Search, UserCircle } from "lucide-react";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isclicked , setIsClicked] = useState(false);

    const handleBellClicked = () =>{
      setIsClicked(!isclicked);
    };

    return (
    <div className="header-container">
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input placeholder="type here..." />
      </div>
      {/* <div className="user-section">
        </div> */}
      <div>

      <Bell
       className= {'icon bell  ${"isclicked" : ""}'}
       onClick={  handleBellClicked }
      />

     <UserCircle className="icon"/>
       <span className="user-text">Pawan Mishra</span>

      </div>
    </div>
  );
};

export default Header;