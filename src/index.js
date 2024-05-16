import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Profiles from "./pages/Profiles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profiles",
    element: <Profiles />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
