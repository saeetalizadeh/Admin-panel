import { useEffect } from "react";
import { getCookie } from "../../utils/cookie";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedLogin() {
  const token = getCookie("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!!token) {
      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedLogin;
