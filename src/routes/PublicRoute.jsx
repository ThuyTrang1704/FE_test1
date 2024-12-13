import { Navigate } from "react-router-dom";
import { getAccessUser } from "../utils/helper";

const PublicRoute = ({ children }) => {
  const isAuthenticated = getAccessUser();
  return !isAuthenticated ? children : <Navigate to="/dashboard" />;
};

export default PublicRoute;
