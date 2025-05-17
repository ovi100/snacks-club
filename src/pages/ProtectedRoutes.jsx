import { Navigate, Outlet, useLocation } from "react-router";

const ProtectedRoutes = ({ user, isLoading }) => {
  const location = useLocation();

  if (isLoading) {
    // Return a loader or null while checking auth state
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    // Redirect to login page, preserving the location they came from
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;