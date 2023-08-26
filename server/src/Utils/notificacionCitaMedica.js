//FUNCIÓN PARA ENVIAR NOTIFICACIONES VIA EMAIL CON HORAS DE ANTICIPACION:
const sendEmailNotification = async (email) => {

    //CODIGO PARA ENVIAR NOTIFICACION VIA EMAIL AL USUARIO QUE HA SIDO CREADO:
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user:"pfhenry4@gmail.com", //email del servidor o dominio desde donde se envia el mensaje
            pass:"tndvsvitmutasmpv", // contraseña que se genero en gestionar contraseñas para aplicaciones en google
        },
    });

    //logica para el envio 72 horas antes de la cita:
  
    // Fecha y hora de la cita médica (esto es solo un ejemplo, asegúrate de tener la lógica adecuada para obtener esta fecha)
    const citaMedicaDate = new Date('2023-08-26T15:30:00');// AQUI VA LA HORA Y FECHA REAL DE LA CITA MEDICA

    //Calcular la hora 72 horas antes de la cita:
    const notificationDate = new Date(citaMedicaDate.getTime() - 0.25 * 60 * 60 * 1000); // se resta 72 horas en milisegundos
  
    // Calcular el tiempo hasta la notificacion:
    const tiempoHastaNotificacion = notificationDate.getTime() - Date.now();

    setTimeout(async () => {
      await transporter.sendMail({
          from: '"ZUCCA NUTRITION" <pfhenry4@gmail.com>', // aqui va el correo desde donde se envia el mensaje y titulo de origen
          to: email, // el email que recibe el mensaje
          subject:'Recordatorio de cita médica', // titulo del mensaje
          text: 'Este es un recordatorio de tu cita médica en 72 horas.'// se puyede enviar un tipo text o html
      });
    }, tiempoHastaNotificacion);
  
  };