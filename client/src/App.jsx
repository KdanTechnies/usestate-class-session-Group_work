import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
    <Navbar brand="Atlas studio" />
    <ScrollToTop/>
    <main>
      {/* Define Routes */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      </main>
      <Footer />
    </Router>
  );
}