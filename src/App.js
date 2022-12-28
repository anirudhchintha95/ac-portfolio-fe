import React from "react";
import cx from "classnames";
import { RouterProvider } from "react-router-dom";

import router from "./router";

function App() {
  const bg = "bg-gradient-to-l from-white to-slate-50";

  return (
    <div className={cx("bg-no-repeat bg-left-bottom", bg)}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
