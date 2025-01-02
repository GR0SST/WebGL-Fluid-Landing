import express from "express"
import https from "https"
import path from 'path'

const app = express()
const port = 3000
app.use(express.static(__dirname));

const routes = ["admin", "root", "auth", "token", "ws", "console", "settings", "dashboard", "backend", "secure", "profile", "api"]

for (let link of routes) {
    app.get(`/${link}`, (req, res) => {

        res.status(307).redirect("https://youtu.be/dQw4w9WgXcQ")

    })
}

app.get("/*", (req, res) => {
    res.status(301).redirect("https://grosst.cc")
})
const server = https.createServer(app);
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})