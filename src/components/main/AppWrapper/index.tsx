import React from "react";
import SideBarBlock from "../SideBar";

interface IWrapper {
  children: React.ReactNode;
}

export const AppWrapper: React.FC<IWrapper> = ({ children }) => {
  return (
    <React.Fragment>
      <SideBarBlock>{children}</SideBarBlock>
    </React.Fragment>
  );
};
