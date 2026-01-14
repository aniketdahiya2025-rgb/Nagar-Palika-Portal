import Dashboard from "./Dashboard";
import DSidebar from "./DSidebar";

const User = () => {
  return (
    <div className="flex w-full">
      <DSidebar />
      <Dashboard />
    </div>
  );
};

export default User;
