import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { queryClient } from "./utils/queryProvider.ts";
import { QueryClientProvider } from "react-query";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
