import { Navigate, Outlet } from "react-router-dom";
import { ROUTES_URL } from "@constants/index";

const PrivateRoute = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES_URL.HOME} />;
};

export default PrivateRoute;
