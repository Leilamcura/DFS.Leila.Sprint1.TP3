import express from 'express';

//Crear una instancia de express
const app = express();

//Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

// Ruta básica
// Solicitud: http://localhost:3000/user/123
app.get('/', (req, res) => {
    res.send(`¡Hola Mundo!`);    
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
});