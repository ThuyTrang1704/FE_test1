import { Navigate } from "react-router-dom";
import { getAccessUser } from "../utils/helper";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = getAccessUser();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
