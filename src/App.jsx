import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Friends from './pages/Friends';
import RSVP from './pages/RSVP';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/rsvp" element={<RSVP />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
