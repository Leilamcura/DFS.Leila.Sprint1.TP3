//Leila Margarita Cura
//Servidor que recibe una solicitud get con un parametro de consulta edad en la URL y muestra el parametro en consola

import express from 'express';

const app = express();
const PORT = 3000;

// Ruta GET con parametro de consulta
// Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
    const edad = req.query.edad;    
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);    
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
});