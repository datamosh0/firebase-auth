import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./app/userSlice";

const PrivateRoute = ({ children }) => {
  const currentUser = useSelector(selectUser);
  return currentUser ? children : <Navigate to="/login" replace></Navigate>;
};
export default PrivateRoute;
