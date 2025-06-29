import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import { ROUTES_URL } from "@constants/index";
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout";
import { ErrorBoundary } from "@components/ErrorBoundary";
import Users from "@pages/Users";

const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES_URL.ABOUT} element={<About />} />
            <Route path={ROUTES_URL.USERS} element={<Users />} />
          </Route>
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRouter;
