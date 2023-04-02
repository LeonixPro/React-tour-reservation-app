import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
export const ProtectedRoutes = () => {
  const { logged } = useContext(AuthContext);

  if (!logged) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export const GuestsRoutes = () => {
  const { logged } = useContext(AuthContext);
  if (logged) {
    return <Navigate to="/profile" />;
  }
  return <Outlet />;
};
