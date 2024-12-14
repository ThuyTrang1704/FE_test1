import { Navigate } from "react-router-dom";
import { getAccessRole } from "../utils/helper";

const PrivateRoute = ({ allowedRoles, children }) => {
  const role = getAccessRole(); // Lấy role từ localStorage hoặc sessionStorage
  
  // Kiểm tra nếu không có role
  if (!role) {
    return <Navigate to="/login" />;
  }
  
  // Kiểm tra nếu role không thuộc danh sách allowedRoles
  if (!allowedRoles.some(r => role === r)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;
