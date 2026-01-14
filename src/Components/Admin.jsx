import AdminDashboard from "./AdminDashboard";
import AdminSidebar from "./Adminsidebar";
import { Outlet } from "react-router-dom";
import ApplicationIssuingPage from "./ApplicationIssueandReview";
import App from "../App";
import ApplicationsDashboard from "./Applications";
import { useState } from "react";

const Admin = () => {
  const [selectedMenu, setSelectedMenu] = useState("Applications Dashboard");
  return (
    <div className="flex w-full min-h-screen bg-gray-50 overflow-visible">
      <AdminSidebar
        className="h-full overflow-visible"
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      {selectedMenu === "Admin Dashboard" ? (
        <AdminDashboard />
      ) : (
        <ApplicationsDashboard className="overflow-visible" />
      )}
    </div>
  );
};

export default Admin;
