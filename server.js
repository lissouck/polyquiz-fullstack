require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Erreur MongoDB :', err));

// Route de test
app.get('/api/ping', (req, res) => {
  res.json({ message: 'PolyQuiz API opérationnelle' });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});