const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const ticketRoutes = require('./routes/ticketRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/tickets', ticketRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});