import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import { ROUTES_URL } from "@constants/index";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route index element={<Home />} />
          <Route path={ROUTES_URL.ABOUT} element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
