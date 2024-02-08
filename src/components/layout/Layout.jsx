import React from "react";
import "./Layout.css";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
    const navigate= useNavigate();
    
  return (
    <>
      <div className="options">
        <button onClick={()=>(navigate('/register'))}>Add employee</button>
        <button onClick={()=>(navigate('/transaction-details'))}>Add transaction</button>
        <button>Report</button>
        <button>Statement</button>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
