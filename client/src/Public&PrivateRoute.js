import { Outlet, Navigate } from "react-router-dom";
const PublicRoute = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token ? <Outlet /> : <Navigate to={"/"} />;
};
const PrivateRoute = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return !token ? <Outlet /> : <Navigate to={"/Browsing"} />;
};
export { PrivateRoute, PublicRoute };
