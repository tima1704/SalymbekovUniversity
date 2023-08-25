import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { AuthLayout } from "./pages/Auth";
import { Modals } from "./components/Modals";
import CheckTokenExpirationAndRefresh from "./hooks/api/checkToken";
import { useGetRoutes } from "./hooks/api/useRoutes";
import {Client} from "./pages/Client";
import { IStructureRoutes } from "./types/common";

const App = () => {
  setInterval(CheckTokenExpirationAndRefresh, 10 * 60 * 1000);

  // TODO (Almaz) ! Добавить анимацию Loader для общего контента.
  const { route, isLoading } = useGetRoutes();

  return (
    <React.Fragment>
      <Modals />
      <Routes>
        {route?.map((data: IStructureRoutes) => (
          <Route
            key={data.id}
            path={data.route}
            element={<Client item={data} />}
          />
        ))}
        <Route path={ROUTES.error} element={<h1>Error page..</h1>} />
        <Route path={ROUTES.auth.authRoute} element={<AuthLayout />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
