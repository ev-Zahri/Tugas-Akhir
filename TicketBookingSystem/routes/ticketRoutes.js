const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.get('/', ticketController.getAllTickets);
router.post('/book', ticketController.bookTicket);
router.get('/success', ticketController.bookingSuccess);

module.exports = router;
