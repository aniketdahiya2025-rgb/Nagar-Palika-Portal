import AdminDashboard from "./AdminDashboard";
import AdminSidebar from "./Adminsidebar";

const Admin = () => {
  return (
    <div className="flex w-full">
      <AdminSidebar />
      <AdminDashboard />
    </div>
  );
};

export default Admin;
