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
    if (!name || !email || !phone || !birthDate || !ticketCount) {
      return res.status(400).send("All fields are required!");
    }

    // Simulasi penyimpanan data pemesanan (tidak menggunakan database)
    console.log(`Ticket booked for ${name}:`, {
      email,
      phone,
      birthDate,
      ticketCount,
    });

    res.send(`Booking confirmed for ${name}! Check your email: ${email}`);
  },
};

module.exports = ticketController;
