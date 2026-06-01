const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (req, res) => {
  try {
    const { pseudo } = req.body;
    if (!pseudo) return res.status(400).json({ message: 'Pseudo requis' });

    let user = await User.findOne({ pseudo: pseudo.toLowerCase() });
    if (!user) {
      user = await User.create({ pseudo: pseudo.toLowerCase() });
    }

    const token = jwt.sign(
      { _id: user._id, pseudo: user.pseudo },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(200).json({ token, pseudo: user.pseudo });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

module.exports = { login };