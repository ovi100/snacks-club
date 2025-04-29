import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const menu = [
    { label: 'Home', to: '/dashboard', end: true },
    { label: 'Members', to: '/dashboard/members', end: false },
    { label: 'Leaderboard', to: '/dashboard/leaderboard', end: false },
    { label: 'Categories', to: '/dashboard/categories', end: false },
    { label: 'Allocate', to: '/dashboard/allocate', end: false },
  ];
  return (
    <div className="flex h-screen">
      <Sidebar items={menu} />
      <main className="flex-1 bg-white p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
