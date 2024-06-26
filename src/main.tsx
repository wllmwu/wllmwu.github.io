import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

if (import.meta.env.SSR) {
  ReactDOM.hydrateRoot(
    document.getElementById("root")!,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
