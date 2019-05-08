const jsonServer = require('json-server')
const auth = require('json-server-auth')
const PORT = process.PORT || 4000
const app = jsonServer.create()
const router = jsonServer.router('db.json')

// /!\ Bind the router db to the app
app.db = router.db

app.use(auth)
app.use('/api',router)
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})