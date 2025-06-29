import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import { ROUTES_URL } from "@constants/index";
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES_URL.ABOUT} element={<About />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
