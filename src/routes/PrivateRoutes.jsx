import Spinner from "../components/Spinner";
import UseAuth from "../hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = UseAuth() || {};
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={`/login`} replace />;
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
