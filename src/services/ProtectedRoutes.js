import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { logged } = useContext(AuthContext);
  // Check if user logged
  if (!logged) {
    return <Navigate to="/login" />; // If not, navigate to login page
  }
  return <Outlet />; // Else, proceed
};

export const GuestsRoutes = () => {
  const { logged } = useContext(AuthContext);
  if (logged) {
    return <Navigate to="/profile" />; // If user logged, navigate to profile page
  }
  return <Outlet />; // Else, proceed
};
