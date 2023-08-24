import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

export const NoAccess = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-center text-base">
        У вас нет доступа к этой странице. Пожалуйста пройдите{" "}
        <Link className="text-blue-500" to={ROUTES.auth.authRoute}>авторизацию!</Link>
      </h1>
    </div>
  );
};
