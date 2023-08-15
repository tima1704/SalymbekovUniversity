import React from "react";
import { AppWrapper } from "../../components/main/AppWrapper";
import { NoAccess } from "../../components/common/NoAccess";

export const Cabinet = () => {
  const user = localStorage.getItem('accessToken')

  if(!user) return <NoAccess />
  
  return (
    <React.Fragment>
      <AppWrapper>
        Never get over get under you
      </AppWrapper>
    </React.Fragment>
  );
};
