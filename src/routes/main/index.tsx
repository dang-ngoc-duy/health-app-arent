import { RouteObject } from "react-router-dom";

const mainRoutes: RouteObject[] = [
  { path: "/", element: <div>Top Page</div> },
  { path: "/records", element: <div>Records Page</div> },
  { path: "/recommended", element: <div>Recommended Page</div> },
];

export default mainRoutes;
