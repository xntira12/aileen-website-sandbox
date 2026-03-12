import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs";
import ComingSoon from "./pages/Comingsoon";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<ComingSoon />} />
        <Route path="/customers" element={<ComingSoon />} />
        <Route path="/news" element={<ComingSoon />} />
      </Routes>
    </HashRouter>
  );
}