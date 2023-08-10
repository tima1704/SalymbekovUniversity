import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { queryClient } from "./utils/queryProvider.ts"
import { QueryClientProvider } from "react-query"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import Store from "./redux/store.ts"

export const AppStore = Store


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
