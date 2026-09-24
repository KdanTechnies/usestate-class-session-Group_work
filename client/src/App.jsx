import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
    <Navbar />
    
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </Router>
  );
}