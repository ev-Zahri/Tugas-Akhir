const ticketController = {
    getAllTickets: (req, res) => {
      const tickets = [
        { id: 1, name: 'Aespa', src: 'img/aespa.jpg', tgl_konser: '20 Des 2024', lokasi: 'Yogyakarta', harga: '50000', },
        { id: 2, name: 'Blackpink', src: 'img/blackpink.jpg', tgl_konser: '20 Des 2024', lokasi: 'Yogyakarta', harga: '50000', },
        { id: 3, name: 'Bruno Mars', src: 'img/bruno_mars.jpg', tgl_konser: '20 Des 2024', lokasi: 'Yogyakarta', harga: '50000', },
        { id: 4, name: 'Dewa 19', src: 'img/dewa19.jpg', tgl_konser: '20 Des 2024', lokasi: 'Yogyakarta', harga: '50000', },
        { id: 5, name: 'Hindia', src: 'img/hindia.jpg', tgl_konser: '20 Des 2024', lokasi: 'Yogyakarta', harga: '50000', },
        { id: 6, name: 'Kunto Aji', src: 'img/kunto_aji.jpg', tgl_konser: '20 Des 2024', lokasi: 'Yogyakarta', harga: '50000', },
      ];
      res.render('index', { tickets });
    },
  
    bookTicket: (req, res) => {
      const { name, email, phone, birthDate, ticketCount } = req.body;
      if (!name || !email || !phone || !birthDate || !ticketCount) {
        return res.status(400).send('All fields are required!');
      }
  
      // Simulasi penyimpanan data pemesanan (tidak menggunakan database)
      console.log(`Ticket booked for ${name}:`, { email, phone, birthDate, ticketCount });
  
      res.send(`Booking confirmed for ${name}! Check your email: ${email}`);
    },
  };
  
  module.exports = ticketController;