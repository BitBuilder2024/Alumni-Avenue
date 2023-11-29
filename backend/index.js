const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://najiullah001:123@cluster0.ooyhmxx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>
  console.log('Successfully Connected')
).catch((err) => console.log('No connection', err));

const userSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
  Image: String,
  Company: String,
  EducationLevel: String, // New field
  GraduationYear: String, // New field
  Major: String, // New field
  Career: String, // New field
  JobPosition: String, // New field
});

const User = mongoose.model('user', userSchema);

// Endpoint to retrieve user data based on email
app.get('/userData', async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ Email: email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User data retrieved successfully', user });
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/Login', async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await User.findOne({ Email });

    if (!user) {
      return res.status(401).json({ message: 'Incorrect Email' });
    }

    if (user.Password !== Password) {
      return res.status(401).json({ message: 'Incorrect Password' });
    }

    return res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/Signup', async (req, res) => {
  const {
    Name,
    Email,
    Password,
    Image,
    Company,
    EducationLevel,
    GraduationYear,
    Major,
    Career,
    JobPosition,
  } = req.body;

  try {
    const existingUser = await User.findOne({ Email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const user = new User({
      Name,
      Email,
      Password,
      Image,
      Company,
      EducationLevel,
      GraduationYear,
      Major,
      Career,
      JobPosition,
    });

    await user.save();

    return res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
});

// Endpoint to update user data
app.post('/updateUserData', async (req, res) => {
  const {
    Email,
    Name,
    Password,
    Image,
    Company,
    EducationLevel,
    GraduationYear,
    Major,
    Career,
    JobPosition,
  } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { Email },
      {
        Name,
        Password,
        Image,
        Company,
        EducationLevel,
        GraduationYear,
        Major,
        Career,
        JobPosition,
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User data updated successfully', user });
  } catch (error) {
    console.error('Error updating user data:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(9270, () => {
  console.log('Server is running on port 9270');
});
