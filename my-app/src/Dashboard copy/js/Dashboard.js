import React, { useState } from "react";
import TopMenu from "../../Components/TopMenu";
import Sidebar from "../../Components/Sidebar";
import Content from "../../Components/Content";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="dashboard">
      {/* Top Horizontal Menu */}
      <TopMenu onMenuSelect={setActivePage} />

      <div className="dashboard-body">
        {/* Sidebar Modules */}
        <Sidebar onSelect={setActivePage} />

        {/* Content Area */}
        <div className="dashboard-content">
          <Content activePage={activePage} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
