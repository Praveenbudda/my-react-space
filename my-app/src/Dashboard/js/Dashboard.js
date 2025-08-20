import React, { useState } from "react";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState("home");

  const renderContent = () => {
    switch (activeModule) {
      case "home":
        return <h2>Welcome to Home Module</h2>;
      case "users":
        return <h2>User Management</h2>;
      case "reports":
        return <h2>Reports Section</h2>;
      case "settings":
        return <h2>Settings Page</h2>;
      default:
        return <h2>Select a module</h2>;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Top Menu Bar */}
      <div className="topbar">
        <h1>My Dashboard</h1>
      </div>

      <div className="main-layout">
        {/* Left Sidebar */}
        <div className="sidebar">
          <ul>
            <li
              className={activeModule === "home" ? "active" : ""}
              onClick={() => setActiveModule("home")}
            >
              Home
            </li>
            <li
              className={activeModule === "users" ? "active" : ""}
              onClick={() => setActiveModule("users")}
            >
              Users
            </li>
            <li
              className={activeModule === "reports" ? "active" : ""}
              onClick={() => setActiveModule("reports")}
            >
              Reports
            </li>
            <li
              className={activeModule === "settings" ? "active" : ""}
              onClick={() => setActiveModule("settings")}
            >
              Settings
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
