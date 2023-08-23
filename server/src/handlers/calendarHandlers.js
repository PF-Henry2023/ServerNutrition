const { google } = require('googleapis');
const uuid = require('uuid');
const htmlResponse = require("../Utils/htmlResponse");
const people = google.people('v1');
require("dotenv").config();

const { YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, YOUR_REDIRECT_URL } =
    process.env;


const oauth2Client = new google.auth.OAuth2(
    YOUR_CLIENT_ID,
    YOUR_CLIENT_SECRET,
    YOUR_REDIRECT_URL
);

const scopes = [
    "https://www.googleapis.com/auth/calendar",
    "openid",
    "profile",
    "email"
]


const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes
});

// obtener url de autenticaccion de usuario de google

const authUser = async (req, res) => {
    try {
        const url = authUrl;
        res.status(200).json({url  })
    } catch (error) {
        res.status(400).json(error)
    }
}

// url de redireccionamiento del usuario si la autenticacion fue exitosa a no

const authUserCallback = async (req, res) => {
    const code = req.query.code;
    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        res.cookie("googleToken", oauth2Client.credentials.access_token, { maxAge: 3600000, domain: "localhost", path: "/" }); 
        return res.send(htmlResponse());
    } catch (error) {
        console.error("Error al obtener el token de acceso:", error);
        return res.send("Error al obtener el token de acceso");
    }
}

//Obtener informacion del usuario actualmente registrado

const getUserInfo = async (req, res) => {
    try {
        await people.people.get(
            {
                resourceName: 'people/me', // 'me' representa al usuario autenticado
                personFields: 'names,emailAddresses', // Campos que deseas obtener
                auth: oauth2Client
            }, (err, response) => {
                if (err) {
                    return res.status(500).json({Error_al_obtener_datos_del_usuario: err});
                }
                //res.cookie("userId", "hola", { maxAge: 3600000, domain: "localhost", path: "/" }); 
                return res.status(200).json( response.data );
            }
        )
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

// Ver todos los eventos del usuario registrado

const getAllEvents = async (req, res) => {
    try {
        const { calendarId  } = req.query;
        const listParams = {
            calendarId: calendarId,
            timeMin: new Date().toISOString(), // Eventos que comienzan después de ahora 
            singleEvents: true, // Obtener eventos individuales en lugar de eventos recurrentes
            orderBy: 'startTime',
        };
        await calendar.events.list(listParams, (err, response) => {
            if(err){
                return res.status(400).json({ error: err })
            }
            return res.status(200).json({ response: response.data.items });
        })
    } catch (error) {
        console.error("Error in getAllEvents:", error);
        return res.status(400).json({ error: error.message }); 
    }
};

// Ruta para Crear calendario

const createCalendar = async (req, res) => {
    try {
        const { name, description, zonaHoraria } = req.body;
        const newCalendarParams = {
            requestBody: {
                summary: name, // Nombre del calendario
                description: description, // Descripcion del calendario
                timeZone: zonaHoraria, // Zona horaria del calendario
                visibility: 'public' // Sirve para que el usuario pueda ver cuando el nutricionista esta disponible
            },
        };
        
        calendar.calendars.insert(newCalendarParams, (err, response) => {
            if (err) {
                return res.status(500).json({ error_al_crear_el_calendario: err });
            }
            return res.status(200).json({ Calendario_creado: response.data });
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

// Crea un evento en el calendario especificado

const saveEvent = async (req ,res) => {
    try {
        const { name, description, dateTimeStart, dateTimeEnd, timeZone, attendees, calendarId } = req.body;
        const requestId = uuid.v4();
        const response = await calendar.events.insert({
            calendarId: calendarId, 
            auth: oauth2Client,
            conferenceDataVersion: 1,
            requestBody: {
                summary: name,
                description: description,
                start: {
                    dateTime: dateTimeStart,
                    timeZone: timeZone
                },
                end: {
                    dateTime: dateTimeEnd,
                    timeZone: timeZone,
                },
                conferenceData: {
                    createRequest: {
                        requestId: requestId,
                    }
                },
                attendees: [
                    ...attendees
                ]
            }
        });
        return res.status(200).json({ message: "El cita fue agendada correctamente" , response})
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getAllEvents,
    authUser,
    authUserCallback,
    getUserInfo,
    saveEvent,
    createCalendar,
}