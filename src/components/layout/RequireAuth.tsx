import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { validToken } from "../../helpers/auth";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();

  if (!validToken()) {
    return <Navigate to="/Login" state={{ from: location }} replace />
  }

  return children;
}

