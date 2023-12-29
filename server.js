const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (replace 'your_connection_string' with your actual connection string)
mongoose.connect('mongodb+srv://Dev_1302:4nD9U1wL72m0jigx@cluster0.hqpifgd.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define a mongoose schema for the form data
const formDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  message: String,
});

// Create a mongoose model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for handling form submissions
app.post('/submit-form', async (req, res) => {
  try {
    // Create a new FormData document with the submitted data
    const formData = new FormData({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });

    // Save the document to MongoDB
    await formData.save();

    res.status(200).send('Form submitted successfully!');
  } catch (err) {
    console.error('Error submitting form:', err);
    res.status(500).send('Internal Server Error');
  }
});


  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
