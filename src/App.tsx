import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { AuthLayout } from "./pages/Auth";
import { Modals } from "./components/Modals";
import CheckTokenExpirationAndRefresh from "./hooks/api/checkToken";
import { useGetRoutes } from "./hooks/api/useRoutes";
import { Client } from "./pages/Client";
import { IStructureRoutes } from "./types/common";
import Loader from "./components/common/Loader/Loader";
import CreateFirstPage from './components/common/CreateFirstPage';

const App = () => {
  setInterval(CheckTokenExpirationAndRefresh, 10 * 60 * 1000);

  const { route, isLoading } = useGetRoutes();

  if (isLoading) return <Loader />
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
        <Route
          path={ROUTES.error}
          element={
            route.length
              ? <Navigate to={'/'} />
              : <CreateFirstPage />
          }
        />
        <Route path={ROUTES.auth.authRoute} element={<AuthLayout />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
