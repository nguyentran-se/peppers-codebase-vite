import { Home } from "@pages";
import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
];

export const router = createBrowserRouter(routes);
