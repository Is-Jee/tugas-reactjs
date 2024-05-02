import { createBrowserRouter } from "react-router-dom";
import { Edit, Home, Create } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/:id",
    element: <Edit/>
  }
]);
