//Ruteo Básico: 
//Define rutas que responden a solicitudes GET específicas. 

import express from 'express';

//Crear una instancia de express
const app = express();

//Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

// Ruta GET para el home 
// Solicitud: http://localhost:3000/ 
app.get('/', (req, res) => { 
    res.send('Página de inicio'); 
}); 

// Ruta GET para recibir datos simples 
// Solicitud: http://localhost:3000/data 
app.get('/data', (req, res) => { 
    res.send('Datos recibidos'); 
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
});