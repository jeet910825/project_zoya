import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./App.css"
import EmployeeRegistration from "./components/forms/EmployeeRegistration";
import TrasactionDetails from "./components/forms/TrasactionDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
      <Route path="register" element={<EmployeeRegistration />}></Route>
      <Route path="transaction-details" element= {<TrasactionDetails />}></Route>
    </Routes>
  );
}

export default App;
