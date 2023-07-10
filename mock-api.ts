const jsonServer = require("json-server");
const server = jsonServer.create();
const dashboardRouters = jsonServer.router("mock-db/dashboard.json");
const achievementsRouters = jsonServer.router("mock-db/achievements.json");
const recommendedRouters = jsonServer.router("mock-db/recommended.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/dashboard/meals", (req, res) => {
  const { _page, _limit } = req.query;
  const meals = dashboardRouters.db.get("meals").value();

  const page = parseInt(_page) || 1;
  const limit = parseInt(_limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const totalItems = meals.length;

  const results = meals.slice(startIndex, endIndex);

  res.setHeader("X-Total-Count", totalItems);
  res.json(results);
});

server.use("/dashboard", dashboardRouters);
server.use("/achievements", achievementsRouters);
server.use("/recommended", recommendedRouters);

const port = 3001;

server.listen(port, () => {
  console.log(`Mock API server is running on port ${port}`);
});
