import { Outlet, useLocation } from "react-router-dom";
import NavBarCom from "../components/NavBar/NavBarCom";

export default function MainLayout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>

      {!hideNavbar && <NavBarCom />}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
