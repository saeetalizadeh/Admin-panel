import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import NotFoundPage from "../pages/NotFoundPage";

import { getCookie } from "../utils/cookie";
import ProtectedLogin from "../components/protectedPages/ProtectedLogin";

function Router() {
  const token = getCookie("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ProtectedLogin />} >
          <Route path="/" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
