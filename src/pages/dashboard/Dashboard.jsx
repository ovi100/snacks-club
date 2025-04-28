import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className='mt-20'><Outlet /></div>
    </div>
  );
};

export default Dashboard;
