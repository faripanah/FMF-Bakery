require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); // Make sure you have this file if needed - Varmista, että sinulla on tämä tiedosto, jos tarvitset sitä
const loginRoutes = require('./routes/loginRoutes');
const { requestLogger, unknownEndpoint, errorHandler } = require("./middleware/Middleware");


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger); // 📌 Middleware para registrar solicitudes

app.get('/test', (req, res) => {
  res.send('Server running correctly'); // Palvelin toimii oikein
});

// Connect to MongoDB - Yhdistä MongoDB:hen
mongoose.connect(process.env.MONGODB_URI, {
  
  
})
.then(() => {
  console.log('Connected to MongoDB'); // Yhdistetty MongoDB:hen
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error); // Virhe yhdistettäessä MongoDB:hen
});

// Use user routes - Käytä käyttäjäreittejä
app.use('/api/users', userRoutes); 
// Use product routes - Käytä tuotereittejä
app.use('/api', productRoutes); // Make sure you have this file if needed - Varmista, että sinulla on tämä tiedosto, jos tarvitset sitä
// Use login routes - Käytä kirjautumisreittejä
app.use('/api', loginRoutes);
//  Middleware para manejar rutas desconocidas
app.use(unknownEndpoint);

//  Middleware para manejar errores globales
app.use(errorHandler);

// Start the server - Käynnistä palvelin
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // Palvelin käynnissä osoitteessa http://localhost:${PORT}
});
