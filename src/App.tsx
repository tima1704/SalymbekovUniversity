import React from "react";
import { Cabinet } from "./pages/Cabinet";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { AuthLayout } from "./pages/Auth";
import { Modals } from "./components/Modals";
import CheckTokenExpirationAndRefresh from "./hooks/api/checkToken";
import { AppWrapper } from "./components/main/AppWrapper";

const App = () => {
  setInterval(CheckTokenExpirationAndRefresh, 10 * 60 * 1000);

  return (
    <React.Fragment>
      <Modals />
      <Routes>
        <Route path={ROUTES.home} element={<Cabinet />} />
        <Route path={ROUTES.auth.authRoute} element={<AuthLayout />} />
        <Route path={ROUTES.error} element={<h1>Error page..</h1>} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
