import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoute({ adminRequired }) {
  PrivateRoute.propTypes = {
    adminRequired: PropTypes.bool,
  };
  const { currentUser } = useSelector((state) => state.user);
  if (!currentUser) {
    return <Navigate to="/sign-in" />;
  }
  if (adminRequired && !currentUser.isAdmin) {
    return <Navigate to="/unauthorized" />;
  }
  return <Outlet />;
}
