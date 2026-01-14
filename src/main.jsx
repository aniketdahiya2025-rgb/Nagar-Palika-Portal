import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSection from "./Components/userlogin.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Userlogin from "./Components/userlogin.jsx";
import Adminlogin from "./Components/Adminlogin.jsx";
import Admin from "./Components/Admin.jsx";
import User from "./Components/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/user-login", element: <Userlogin /> },
      { path: "/admin-login", element: <Adminlogin /> },
      { path: "/admin", element: <Admin /> },
      { path: "/user", element: <User /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
