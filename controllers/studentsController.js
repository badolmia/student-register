const StudentsModel = require('../models/studentsModel');
const jwt = require('jsonwebtoken');

// Controller for student registration
const registerStudent = async (req, res) => {
  try {
    const { email, firstName, lastName, mobile, password, address, roll, class } = req.body;
    const student = new StudentsModel({ email, firstName, lastName, mobile, password, address, roll, class });
    await student.save();
    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Controller for student login and token generation
const loginStudent = async (req, res) => {
  const { email, password } = req.body;
  const student = await StudentsModel.findOne({ email });

  if (!student || student.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate and send a JWT token
  const token = jwt.sign({ email: student.email }, 'your_secret_key');
  res.json({ token });
};

module.exports = {
  registerStudent,
  loginStudent,
};
