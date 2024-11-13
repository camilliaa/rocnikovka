import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './pages/MainContent';
import Booking from './pages/Booking';
import Login from './pages/Login';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} /> {/* Domovská stránka */}
          <Route path="/about" element={<About />} /> {/* O mně */}
          <Route path="/gallery" element={<Gallery />} /> {/* Galerie */}
          <Route path="/booking" element={<Booking />} /> {/* Booking */}
          <Route path="/contact" element={<Contact />} /> {/* Kontakt */}
          <Route path="/login" element={<Login />} /> {/* Přihlášení */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
