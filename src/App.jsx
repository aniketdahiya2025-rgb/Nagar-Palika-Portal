import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Titlebar from "./Components/Titlebar.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import DSidebar from "./Components/DSidebar.jsx";
import Body from "./Components/Body.jsx";
import NewsSidebar from "./Components/News.jsx";
import AdminDashboard from "./Components/AdminDashboard.jsx";
import AdminSidebar from "./Components/Adminsidebar.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Titlebar />
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
