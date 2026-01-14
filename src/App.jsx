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
import ApplicationsProvider from "./Store/Application-store.jsx";
function App() {
  return (
    <ApplicationsProvider>
      <div className="h-screen flex flex-col overflow-visible">
        <Titlebar />
        <Navbar />
        <div className="flex flex-1 overflow-visible">
          <Outlet />
        </div>
      </div>
    </ApplicationsProvider>
  );
}

export default App;
