const { OAuth2Client } = require("google-auth-library");


const token1 = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzYWZlN2E5YmRhNDZiYWU2ZWY5N2U0NmM5NWNkYTQ4OTEyZTU5NzkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2NTkyMDY5ODE0ODAtZHB2MjhiNXRvMXUyMHA2b25jY2NmcmwycGtnbWVpNWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2NTkyMDY5ODE0ODAtZHB2MjhiNXRvMXUyMHA2b25jY2NmcmwycGtnbWVpNWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTM3MTQyMDQwMjk4NzU3OTMxODgiLCJlbWFpbCI6ImdhYnJpZWxyb3F1ZTgwM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkFhNlpnbldGb3FSd3dlZTFmeHZtU1EiLCJuYW1lIjoiR2FicmllbCBSb3F1ZSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRmcmhQZkd5V3pFRmZfNHkzZjVTWkNHTlVSSHpiU011ZTFPRWdvWXJzakE9czk2LWMiLCJnaXZlbl9uYW1lIjoiR2FicmllbCIsImZhbWlseV9uYW1lIjoiUm9xdWUiLCJsb2NhbGUiOiJlcy00MTkiLCJpYXQiOjE2OTI5MDE0ODIsImV4cCI6MTY5MjkwNTA4Mn0.PFJ9FpZJ6j7i0ne_wj4Xle5N1gqwgTMJMnV8ZgMT-V6ngas9l-U14nf5qPDtKk84rOrnGr03a-fGVxQltg9YmqmoDOBTvy_JrQJFJB3EiQ1xkvi__ELnpe1ZYu4-b9L148Hf09hzo7bDfXajJpqSGmEsNb4n2ABeNYOzs0eugLNoGUVLe2B15HR0FXG6meNjKI29x5Lbw7TMskgK7gv-d8tLKHzm3voJAUrf5lmCrDf6JFnr4IyMD6_9Yh-uq8Qyq0nCRZML8NBb9jfL3qECSC_BTbO22roNIIujHtIRfXwj7_CKMnE96-5n82Zhkds_qZZEH04mZ4iLad-TGrB2HQ";

const decodeTokenOauth = async (token = token1) => {
    // Decodificar el token
    const client = new OAuth2Client();
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: '659206981480-dpv28b5to1u20p6oncccfrl2pkgmei5b.apps.googleusercontent.com', // Reemplaza 'tu_client_id' con el ID de cliente de tu aplicación
    });
    const payload = ticket.getPayload();
    return payload;
}


decodeTokenOauth();