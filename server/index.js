import express from "express";
import axios from "axios";
import "dotenv/config";
import { google } from "googleapis";

const PORT = process.env.PORT;

const server = express();

const test = new google.auth.OAuth2({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET, redirectUri: "http://localhost:8080/redirect" });

server.get("/authenticate", async (req, res) => {
    // const { token } = req.body;

    // const ticket = await test.verifyIdToken({
    //     idToken: token,
    //     audient: process.env.GOOGLE_CLIENT_ID
    // })

    const url = test.generateAuthUrl({
        access_type: "offline",
        scope: [
            "https://www.googleapis.com/auth/userinfo.email",
            //calendar api scopes]
            "https://www.googleapis.com/auth/calendar",
        ],
        prompt: "consent",
    });

    // console.log(req)
    res.redirect(url);
    // res.json("ok")
});

server.get("/redirect", async (req, res) => {
    const code = req.query.code
    test.getToken(code, (err, tokens) => {
        if (err) {
            console.log("server 39 | error", err);
            throw new Error("Issue with Login", err.message);
          }
        const accessToken = tokens.access_token;
        const refreshToken = tokens.refresh_token;

        res.redirect(
            `http://localhost:8080/calendar?accessToken=${accessToken}&refreshToken=${refreshToken}`
        );
    })
})

server.get("/", async (req, res) => {
    const accessToken = req.query.accessToken;
    const refreshToken = req.query.refreshToken;
    res.send({accessToken, refreshToken});
})

server.get("/calendar", async (req, res) => {
    const accessToken = req.query.accessToken;
    const request = await axios(
        `https://www.googleapis.com/calendar/v3/calendars/alexj.bartolo@gmail.com/events`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
    )

    res.send(await request.data.items)
})


server.listen(PORT, () => console.log(`Server Listening on ${PORT}`));
