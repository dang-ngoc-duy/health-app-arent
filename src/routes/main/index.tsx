import { RouteObject } from "react-router-dom";
import Achievements from "src/components/pages/Achievements";
import Dashboard from "src/components/pages/Dashboard";
import NotFound from "src/components/pages/NotFound";
import Recommended from "src/components/pages/Recommended";

const mainRoutes: RouteObject[] = [
  { path: "/", element: <Dashboard /> },
  { path: "/achievements", element: <Achievements /> },
  { path: "/recommended", element: <Recommended /> },
  { path: "*", element: <NotFound /> },
];

export default mainRoutes;
