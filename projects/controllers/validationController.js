exports.showForm = (req, res) => {
    res.render("form", { errorMessages: {}, inputValues: {} });
  };
  
  exports.validateForm = (req, res) => {
    const { username, email, password, phone, age, postalCode } = req.body;
  
    // Pola regex untuk validasi
    const patterns = {
      username: /^[a-zA-Z0-9._]{3,20}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
      phone: /^(\+62|62|0)[0-9]{9,13}$/,
      age: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
      postalCode: /^[0-9]{5}$/,
    };
  
    const errorMessages = {};
    const inputValues = req.body;
  
    // Validasi
    if (!patterns.username.test(username)) errorMessages.username = "Username tidak valid!";
    if (!patterns.email.test(email)) errorMessages.email = "Email tidak valid!";
    if (!patterns.password.test(password)) errorMessages.password = "Password tidak valid!";
    if (!patterns.phone.test(phone)) errorMessages.phone = "Nomor telepon tidak valid!";
    if (!patterns.age.test(age)) errorMessages.age = "Umur tidak valid!";
    if (!patterns.postalCode.test(postalCode)) errorMessages.postalCode = "Kode pos tidak valid!";
  
    if (Object.keys(errorMessages).length > 0) {
      // Kirim ulang form dengan pesan error
      return res.render("form", { errorMessages, inputValues });
    }
  
    // Jika validasi berhasil
    res.render("result", { username, email, phone, age, postalCode });
  };
  