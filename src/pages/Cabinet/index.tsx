import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Cabinet = () => {
  const user = localStorage.getItem("accessToken")

  if (!user) return <Navigate to={ROUTES.auth.authRoute} />

  return (
    <React.Fragment>
      <h1>Cabinet</h1>
    </React.Fragment>
  );
};
