import { RouteObject } from "react-router-dom";
import Achievements from "src/components/pages/Achievements";
import Dashboard from "src/components/pages/Dashboard";
import Recommended from "src/components/pages/Recommended";

const mainRoutes: RouteObject[] = [
  { path: "/", element: <Dashboard></Dashboard> },
  { path: "/achievements", element: <Achievements></Achievements> },
  { path: "/recommended", element: <Recommended></Recommended> },
];

export default mainRoutes;
