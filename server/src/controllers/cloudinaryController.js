const cloudinary = require('cloudinary').v2;

const downloadCloudinary = async() => {

// Configura tus credenciales de Cloudinary
cloudinary.config({
  cloud_name: 'dhmsbud0o',
  api_key: '448615133128355',
  api_secret: 'qIXSDIUW6mGPzp3GuL0FKSyLy44',
});

// Genera la URL segura y firmada
function generateSignedUrl(publicId) {
    console.log(`El ID archivo: ${publicId}`);
  return cloudinary.url(publicId, {
    secure: true,
    sign_url: true,
    resource_type: 'raw', // Esto indica que deseas la URL en modo "raw"
    // Puedes agregar opciones adicionales aquí según tus necesidades.
  });
}
// Ahora, puedes llamar a generateSignedUrl para obtener la URL segura y firmada
const url = generateSignedUrl("filesZucca/bbb.docx");

return url
};

module.exports = {
    downloadCloudinary,
};