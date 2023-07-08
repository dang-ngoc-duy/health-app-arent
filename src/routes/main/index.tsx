import { RouteObject } from "react-router-dom";
import Dashboard from "src/components/pages/Dashboard";

const mainRoutes: RouteObject[] = [
  { path: "/", element: <Dashboard></Dashboard> },
  { path: "/records", element: <div>Records Page</div> },
  { path: "/recommended", element: <div>Recommended Page</div> },
];

export default mainRoutes;
