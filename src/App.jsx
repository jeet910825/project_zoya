import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./App.css";
import EmployeeRegistration from "./components/forms/EmployeeRegistration";
import TrasactionDetails from "./components/forms/TrasactionDetails";
import Employee from "./components/pages/Employee.jsx";
import Login from "./components/pages/login/Login.jsx";
import Report from "./components/table/Report.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="register" element={<EmployeeRegistration />}></Route>
      <Route path="transaction-details" element={<TrasactionDetails />}></Route>
      <Route path="employee" element={<Report />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
