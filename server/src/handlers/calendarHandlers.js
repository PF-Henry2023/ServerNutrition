const { google } = require('googleapis');
const axios = require("axios");
require("dotenv").config();

const { YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, YOUR_REDIRECT_URL, YOUR_API_KEY } =
    process.env;


const oauth2Client = new google.auth.OAuth2(
    YOUR_CLIENT_ID,
    YOUR_CLIENT_SECRET,
    YOUR_REDIRECT_URL
);


const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
        "https://www.googleapis.com/auth/calendar.events",
        "https://www.googleapis.com/auth/calendar.readonly",
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ],
});

const authUser = async (req, res) => {
    try {
        res.redirect(authUrl);
    } catch (error) {
        res.status(400).json(error)
    }
}

const authUserCallback = async (req, res) => {
    const code = req.query.code;
    try {
        const tokenResponse = await oauth2Client.getToken(code);
        const accessToken = tokenResponse.tokens.access_token;

      // Almacenamiento de cookie en el navegador del cliente(cookie temporal)

        res.cookie("google_token", accessToken, { maxAge: 3600000 });
        res.send({ token: "Token obtenido con exito" });

    } catch (error) {
        console.error("Error al obtener el token de acceso:", error);
        res.send("Error al obtener el token de acceso");
    }
}

const getUserInfo = async (req, res) => {
    try {
        const token = req.cookies.google_token;
        if(!token){
            res.status(401).json({ error: "Token not found" })
        }
        const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        res.cookie("UserId", userInfo.data.email, { maxAge: 3600000 });
        res.status(200).json(userInfo.data);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getAllEvents = async (req, res) => {
    try {
        try {
            const UserId = req.cookies.UserId;
            const Token = req.cookies.google_token;
            if(!UserId && !Token){
                res.status(401).json({ error: "UserID not found" })
            }
            const { data } = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${UserId}/events?key=${YOUR_API_KEY}`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            })
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    getAllEvents,
    authUser,
    authUserCallback,
    getUserInfo
}