import express, { Request } from "express"
import https from "https"
import path from 'path'
import axios from "axios"

const app = express()
const port = 3000
app.use(express.static(__dirname));

const routes = ["admin", "root", "auth", "token", "ws", "console", "settings", "dashboard", "backend", "secure", "profile", "api"]

const rickRolled = async (req: Request) => {

    const ip = req.headers['x-forwarded-for']?.toString().split(',')[0].trim() || req.socket.remoteAddress;

    const path = req.path

    const embed = {
        "embeds": [
            {
                "color": null,
                "title": "Rick Rolled",
                "fields": [
                    {
                        "name": "path",
                        "value": `[${path}](https://grosst.cc${path})`,
                        "inline": true
                    },
                    {
                        "name": "ip",
                        "value": ip,
                        "inline": true
                    }
                ]
            }
        ],
        "username": "Rick Rolled",
        "avatar_url": "https://i.postimg.cc/fyBDb1wg/image.png"
    }
    await axios.post("https://discord.com/api/webhooks/1204441078623899729/XC_aAK6AKvOKo6yMR7tdslU7M-OHiVOUV9z-DkkX2t3OkhnXbdEgPa3QmG1aOffnousy", embed);
}

for (let link of routes) {
    app.get(`/${link}`, (req, res) => {
        rickRolled(req)
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