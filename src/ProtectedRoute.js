import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute() {
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  } else {
    toast.error("Sorry, you are not authorized to access the admin page.");
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
