import React from "react";
import { Cabinet } from "./Cabinet";
import { AppWrapper } from "../../components/main/AppWrapper";
import { IRoutes } from "../../types/common";

export const Client: React.FC<IRoutes> = ({ item }) => {
  return (
    <AppWrapper>
      <Cabinet route={item.route} />
    </AppWrapper>
  );
};