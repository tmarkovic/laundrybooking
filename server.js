const jsonServer = require("json-server");
const auth = require("json-server-auth");
const PORT = process.PORT || 4000;
const app = jsonServer.create();
const router = jsonServer.router("db.json");

const rules = auth.rewriter({
  users: 600,
  reservations: 640,
  auth: 440
});
app.db = router.db;
app.use(rules);

app.use(auth);
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
