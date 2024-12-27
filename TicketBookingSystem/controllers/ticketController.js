const ticketController = {
  getAllTickets: (req, res) => {
    const tickets = [
      {
        id: 1,
        name: "Aespa",
        src: "img/aespa.jpg",
        tgl_konser: "11 Januari 2025",
        lokasi: "Gelora Bung Karno, Jakarta",
        harga: "2500000",
      },
      {
        id: 2,
        name: "Blackpink",
        src: "img/blackpink.jpg",
        tgl_konser: "12 Januari 2025",
        lokasi: "Gelora Bung Tomo, Surabaya",
        harga: "3200000",
      },
      {
        id: 3,
        name: "Bruno Mars",
        src: "img/bruno_mars.jpg",
        tgl_konser: "13 Januari 2025",
        lokasi: "Jakarta International Stadium, Jakarta",
        harga: "6500000",
      },
      {
        id: 4,
        name: "Dewa 19",
        src: "img/dewa19.jpg",
        tgl_konser: "18 Januari 2025",
        lokasi: "Stadion Manahan, Solo",
        harga: "1800000",
      },
      {
        id: 5,
        name: "Hindia",
        src: "img/hindia.jpg",
        tgl_konser: "19 Januari 2025",
        lokasi: "Stadion Mandala Krida, Yogyakarta",
        harga: "150000",
      },
      {
        id: 6,
        name: "Kunto Aji",
        src: "img/kunto_aji.jpg",
        tgl_konser: "20 Januari 2025",
        lokasi: "Bandung Kota",
        harga: "225000",
      },
    ];
    res.render("index", { tickets });
  },

  bookTicket: (req, res) => {
    const { name, email, phone, birthDate, ticketCount } = req.body;

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    const ticketCountRegex = /^[1-9][0-9]?$/;

    // Validate each field
    if (!nameRegex.test(name)) {
      return res.status(400).send("Invalid name. Use only letters and spaces (3-50 characters).");
    }
    if (!emailRegex.test(email)) {
      return res.status(400).send("Invalid email format.");
    }
    if (!phoneRegex.test(phone)) {
      return res.status(400).send("Invalid phone number. Use 10-15 digits.");
    }
    if (!ticketCountRegex.test(ticketCount)) {
      return res.status(400).send("Invalid ticket count. Enter a number between 1-99.");
    }

    // Redirect to success page
    res.redirect(`/tickets/success?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
  },
  
  bookingSuccess: (req, res) => {
    const { name, email } = req.query;
    res.render("success", { name, email });
  },
};

module.exports = ticketController;
