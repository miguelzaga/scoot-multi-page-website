import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Careers from "./components/Careers";
import Locations from "./components/Locations";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
