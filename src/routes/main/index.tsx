import { RouteObject } from "react-router-dom";
import Achievements from "src/components/pages/Achievements";
import Dashboard from "src/components/pages/Dashboard";

const mainRoutes: RouteObject[] = [
  { path: "/", element: <Dashboard></Dashboard> },
  { path: "/achievements", element: <Achievements></Achievements> },
  { path: "/recommended", element: <div>Recommended Page</div> },
];

export default mainRoutes;
