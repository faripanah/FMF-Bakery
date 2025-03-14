const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register user - Rekisteröi käyttäjä
const registerUser = async (req, res) => {
  console.log('Request received:', req.body); // Pyyntö vastaanotettu
  try {
    const { name, email, phone,address, password } = req.body;
    // 🔹 Tarkista, että kentät eivät ole tyhjiä ,  //Validate that the fields are not empty 
    if (!name || !email ||!phone ||!address || !password) {
      return res.status(400).json({ message: 'All fields are required.' }); // Kaikki kentät ovat pakollisia ,// All fields are required.
    }
       // 🔹 Tarkista, onko käyttäjä jo olemassa ,Check if the user already exists 
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' }); // Käyttäjä on jo olemassa , User already exists
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password - Salaa salasana

    const newUser = new User({ name, email, phone, address, password: hashedPassword });
    await newUser.save(); 
    
    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });


    res.status(201).json({ message: 'User registered successfully', 
      user:{
          _id: newUser._id,
          name: newUser.name,
         email: newUser.email,
         

      },
      token,// Send the token in the response, Lähetä tunnus vastauksessa
     }); // Käyttäjä rekisteröity onnistuneesti


  } catch (error) {
    console.error('❌ Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error }); // Virhe käyttäjän rekisteröinnissä
  }
};

// Get all users - Hae kaikki käyttäjät
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // 🔹Jätä salasana pois vastauksesta, Exclude password in response
    res.json(users);
  } catch (error) {
    console.error('❌ Error retrieving users:', error);
    res.status(500).json({ message: 'Other famous people in the Haute Couture', error }); //Virhe haettaessa käyttäjiä , Error getting users
  }
};


module.exports = { registerUser, getUsers };
