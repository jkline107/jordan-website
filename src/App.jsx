import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";

import Home from "./pages/Home.jsx";
import PhotoPortfolio from "./pages/Portfolio.jsx";
import ColoristReel from "./pages/ColoristReel.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="site-root">
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PhotoPortfolio />} />
          <Route path="/colorist-reel" element={<ColoristReel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
