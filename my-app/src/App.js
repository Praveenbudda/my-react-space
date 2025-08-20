import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login/js/Login";
import Register from "./Login/js/Register";
import Dashboard from "./Dashboard/js/Dashboard";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route → redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} /> 
        {/* * means dashboard can have nested routes later */}
      </Routes>
    </Router>
  );
}

export default App;
