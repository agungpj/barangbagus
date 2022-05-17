import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const auth = localStorage.getItem("auth");
  const initialValue = JSON.parse(auth);
  return initialValue === true ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoute;
