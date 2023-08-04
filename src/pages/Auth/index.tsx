import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { ROUTES } from "../../constants/routes"
import { SignIn } from "./SignIn"

export const AuthLayout = () => {
  return (
    <Routes>
      <Route path={ROUTES.auth.signin} element={<SignIn />} />
      <Route
        path={ROUTES.error}
        element={<Navigate to={`/auth${ROUTES.auth.signin}`} replace />}
      />
    </Routes>
  );
};
