import React from "react"
import { Cabinet } from "./pages/Cabinet"
import { Routes, Route } from "react-router-dom"
import { ROUTES } from "./constants/routes"
import { AuthLayout } from "./pages/Auth"

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Cabinet />} />
      <Route path={ROUTES.auth.authRoute} element={<AuthLayout />} />
      <Route path={ROUTES.error} element={<h1>Error page..</h1>} />
    </Routes>
  );
};

export default App;
