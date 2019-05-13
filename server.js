const jsonServer = require('json-server')
const auth = require('json-server-auth')
const {rewriter} = require('json-server-auth/dist/guards')
const PORT = process.PORT || 4000
const app = jsonServer.create()
const router = jsonServer.router('db.json')

const rules = rewriter({
  "/api/users*": "/600/api/users$1",
  "/api/reservations*": "/640/api/reservations$1",
  "/api/auth*": "/440/api/auth$1",
})
app.db = router.db
app.use(rules);

app.use(auth)
app.use("/api", router)
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})