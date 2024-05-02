import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import React from "react";

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;