import { Outlet, useLocation } from "react-router-dom";
import NavBarCom from "../components/NavBar/NavBarCom";

export default function MainLayout() {
  const location = useLocation();

  // Check if the current route is "/login" or "/register" to hide the navbar
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {/* Conditionally render the Navbar based on the route */}
      {!hideNavbar && <NavBarCom />}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
