require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('./models/Question');

const questions = [
  {
    category: "F1",
    text: "Quel pilote a remporté le plus de championnats du monde de F1 ?",
    options: ["Michael Schumacher", "Lewis Hamilton", "Ayrton Senna", "Sebastian Vettel"],
    correctAnswer: "Lewis Hamilton"
  },
  {
    category: "F1",
    text: "Quelle écurie a dominé la saison 2023 de F1 ?",
    options: ["Ferrari", "Mercedes", "Red Bull", "McLaren"],
    correctAnswer: "Red Bull"
  },
  {
    category: "Manga",
    text: "Quel est le vrai nom de Naruto Uzumaki ?",
    options: ["Naruto Namikaze", "Naruto Uzumaki", "Naruto Uchiha", "Naruto Senju"],
    correctAnswer: "Naruto Uzumaki"
  },
  {
    category: "Manga",
    text: "Dans quel manga trouve-on le personnage de Goku ?",
    options: ["One Piece", "Naruto", "Dragon Ball", "Bleach"],
    correctAnswer: "Dragon Ball"
  },
  {
    category: "Géographie",
    text: "Quelle est la capitale du Cameroun ?",
    options: ["Douala", "Yaoundé", "Bafoussam", "Garoua"],
    correctAnswer: "Yaoundé"
  },
  {
    category: "Géographie",
    text: "Quel est le plus grand pays du monde ?",
    options: ["USA", "Chine", "Canada", "Russie"],
    correctAnswer: "Russie"
  },
  {
    category: "Sciences",
    text: "Quelle est la formule chimique de l'eau ?",
    options: ["H2O", "CO2", "O2", "H2SO4"],
    correctAnswer: "H2O"
  },
  {
    category: "Sciences",
    text: "Combien de planètes y a-t-il dans le système solaire ?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8"
  },
  {
    category: "Informatique",
    text: "Que signifie HTML ?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Markup Language", "None"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    category: "Informatique",
    text: "Quel langage est utilisé pour styliser une page web ?",
    options: ["HTML", "JavaScript", "CSS", "Python"],
    correctAnswer: "CSS"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connecté à MongoDB');

    await Question.deleteMany();
    console.log('Questions supprimées');

    await Question.insertMany(questions);
    console.log('10 questions insérées avec succès !');

    process.exit(0);
  } catch (err) {
    console.error('Erreur seeding :', err);
    process.exit(1);
  }
};

seedDB();