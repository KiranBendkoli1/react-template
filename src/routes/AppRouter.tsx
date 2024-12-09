import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import { ROUTES_URL } from "../constants/ROUTES_URL";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES_URL.ABOUT} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
