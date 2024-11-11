// Nejprve nainstaluj Express, pokud jsi tak ještě neudělal
// npm install express dotenv

// Importujeme potřebné knihovny
const express = require('express'); // Importujeme framework Express pro vytvoření serveru
const dotenv = require('dotenv'); // Importujeme dotenv pro práci s proměnnými prostředí

dotenv.config(); // Načítáme proměnné prostředí z .env souboru

const app = express(); // Inicializujeme aplikaci Express
const port = process.env.PORT || 3000; // Nastavení portu, na kterém server poběží (výchozí hodnota 3000)

// Middleware pro parsování těla requestu
app.use(express.json()); // Middleware pro parsování JSON dat v těle požadavku
app.use(express.urlencoded({ extended: true })); // Middleware pro parsování URL-encoded dat (například z formulářů)

// Import rout ze samostatného souboru
const aboutRoute = require('./routes/about'); // Importujeme routu pro stránku "O nás"
const bookingRoute = require('./routes/booking'); // Importujeme routu pro rezervace
const contactRoute = require('./routes/contact'); // Importujeme routu pro kontaktní stránku
const galleryRoute = require('./routes/gallery'); // Importujeme routu pro galerii
const authRoute = require('./routes/auth'); // Importujeme routu pro autentizaci

// Použití rout
app.use('/about', aboutRoute); // Všechno, co začíná na /about, bude obsluhováno souborem aboutRoute
app.use('/booking', bookingRoute); // Všechno, co začíná na /booking, bude obsluhováno souborem bookingRoute
app.use('/contact', contactRoute); // Všechno, co začíná na /contact, bude obsluhováno souborem contactRoute
app.use('/gallery', galleryRoute); // Všechno, co začíná na /gallery, bude obsluhováno souborem galleryRoute
app.use('/auth', authRoute); // Všechno, co začíná na /auth, bude obsluhováno souborem authRoute

// Chybová stránka 404
app.use((req, res) => {
  res.status(404).json({ message: 'Stránka nebyla nalezena' }); // Pokud žádná routa neodpovídá, vrátí se chyba 404
});

// Spuštění serveru
app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`); // Vypíše do konzole, že server běží na určitém portu
});