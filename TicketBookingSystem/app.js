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

// app.use('/tickets', (req, res) => {
//   const tickets = [
//     { id: 1, name: 'Aespa', src: 'img/aespa.jpg' },
//     { id: 2, name: 'Blackpink', src: 'img/blackpink.jpg' },
//     { id: 3, name: 'Bruno Mars', src: 'img/bruno_mars.jpg' },
//     { id: 4, name: 'Dewa 19', src: 'img/dewa19.jpg' },
//     { id: 5, name: 'Hindia', src: 'img/hindia.jpg' },
//     { id: 6, name: 'Kunto Aji', src: 'img/kunto_aji.jpg' },
//   ];
//   res.render('index', { tickets });
// });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});