const express = require("express");
const bodyParser = require("body-parser");
const validationController = require("./controllers/validationController");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes
app.get("/", validationController.showForm);
app.post("/submit", validationController.validateForm);

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
