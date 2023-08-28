import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { AuthLayout } from "./pages/Auth";
import { Modals } from "./components/Modals";
import CheckTokenExpirationAndRefresh from "./hooks/api/checkToken";
import { useCreateHomePage, useGetRoutes } from "./hooks/api/useRoutes";
import { Client } from "./pages/Client";
import { IStructureRoutes } from "./types/common";
import Loader from "./components/ui/Loader/Loader";

const App = () => {
  setInterval(CheckTokenExpirationAndRefresh, 10 * 60 * 1000);

  const { route, isLoading } = useGetRoutes();
  const { mutate } = useCreateHomePage()

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
        <Route path={ROUTES.error} element={
          route.length
            ? <Navigate to={'/'} />
            : <div
                className="flex h-screen items-center justify-center flex-col"
              >
                <h2 className="mb-3">Создайте первую страницу</h2>
                <button
                  onClick={() => mutate()}
                  className="
                    px-3
                    py-2
                    bg-green-500
                    text-white
                    rounded
                    hover:bg-green-600
                    active:bg-green-700
                  "
                >
                  Create Home Page
                </button>
              </div>
        } />
        <Route path={ROUTES.auth.authRoute} element={<AuthLayout />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
