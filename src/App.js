import React from "react";
import { RouterProvider } from "react-router-dom";

import router from "./router";

function App() {
  return (
    <div className="bg-no-repeat bg-left-bottom bg-gradient-to-l from-white to-slate-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
