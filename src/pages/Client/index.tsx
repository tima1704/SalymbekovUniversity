import React from "react"
import { Cabinet } from "./Cabinet"
import { IRoutes } from "../../types/common"
import SideBarBlock from "../../components/SideBar"

export const Client: React.FC<IRoutes> = ({ item }) => {
  return (
    <SideBarBlock>
      <Cabinet route={item.route} />
    </SideBarBlock>
  );
};