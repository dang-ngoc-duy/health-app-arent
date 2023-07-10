const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = 3001;

const dashboardRouters = jsonServer.router("mock-db/dashboard.json");
const achievementsRouters = jsonServer.router("mock-db/achievements.json");
const recommendedRouters = jsonServer.router("mock-db/recommended.json");
const usersRouters = jsonServer.router("mock-db/users.json");

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use("/dashboard", dashboardRouters);
server.use("/achievements", achievementsRouters);
server.use("/recommended", recommendedRouters);
server.use("/users", usersRouters);

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

server.post("/users/login", (req, res) => {
  const { username, password } = req.body;
  const loginData = usersRouters.db.get("login").value();

  if (username === loginData.username && password === loginData.password) {
    // For simplicity, we use the username and password as the token. In a real app, you should use a JWT token.
    const token = Buffer.from(`${username}:${password}`).toString("base64");
    res.status(200).json({ message: "Login successful", token: token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

server.get("/users/user_profile", (req, res) => {
  const { authorization } = req.headers;
  const token = authorization?.split(" ")[1];
  const userProfileData = usersRouters.db.get("user_profile").value();

  if (token) {
    const decodedToken = Buffer.from(token, "base64").toString("ascii");
    const [username, password] = decodedToken.split(":");

    const loginData = usersRouters.db.get("login").value();
    if (username === loginData.username && password === loginData.password) {
      res.status(200).json(userProfileData);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

server.listen(port, () => {
  console.log(`Mock API server is running on port ${port}`);
});
