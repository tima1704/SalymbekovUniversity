import React from "react";
import { AppWrapper } from "../../components/main/AppWrapper";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Cabinet = () => {
  const user = localStorage.getItem('accessToken')
  
  if(!user) return <Navigate to={ROUTES.auth.authRoute} />
  
  return (
    <React.Fragment>
      <AppWrapper>
        Never get over get under you
      </AppWrapper>
    </React.Fragment>
  );
};
