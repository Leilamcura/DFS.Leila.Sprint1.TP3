//Ruteo con Consultas: 
//Maneja rutas que utilizan parámetros de consulta en la URL. 

import express from 'express';

//Crear una instancia de express
const app = express();

//Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

// Ruta GET con parámetro de consulta 
// Solicitud: http://localhost:3000/search?q=javascript 
app.get('/search', (req, res) => { 
    const query = req.query.q; 
    res.send(`Resultados de búsqueda para: ${query}`); 
});

// Ruta GET con múltiples parámetros de consulta 
// Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50 
app.get('/filter', (req, res) => { 
    const {type, minPrice, maxPrice } = req.query; 
    res.send('Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}'); 
}); 


//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
});