const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/crudDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Define mongoose model
const Item = mongoose.model('Item', {
  name: String
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
