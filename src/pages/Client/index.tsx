import React from "react";
import { Cabinet } from "./Cabinet";
import { AppWrapper } from "../../components/main/AppWrapper";
import { IRoutes, IStructureRoutes } from "../../types/common";

export const Client: React.FC<IRoutes> = ({ item }) => {
  return (
    <AppWrapper>
      <Cabinet />
    </AppWrapper>
  );
};