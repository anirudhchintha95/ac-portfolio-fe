import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";

const router = createBrowserRouter([
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
]);

export default router;
