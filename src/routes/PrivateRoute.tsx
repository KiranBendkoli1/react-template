import Navbar from "@components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES_URL } from "@constants/index";

const PrivateRoute = () => {
  const isAuthenticated = true;
  return isAuthenticated ? (
    <div className="flex flex-col min-h-screen bg-bgPrimary">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to={ROUTES_URL.HOME} />
  );
};

export default PrivateRoute;
