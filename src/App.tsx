import React from "react";
import { Cabinet } from "./pages/Cabinet";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { AuthLayout } from "./pages/Auth";
import { Modals } from "./components/Modals";
import CheckTokenExpirationAndRefresh from "./hooks/api/checkToken";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  setInterval(CheckTokenExpirationAndRefresh, 10 * 60 * 1000);

  return (
    <React.Fragment>
      <Modals />
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path={ROUTES.home} element={<Cabinet />} />
        <Route path={ROUTES.auth.authRoute} element={<AuthLayout />} />
        <Route path={ROUTES.error} element={<h1>Error page..</h1>} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
