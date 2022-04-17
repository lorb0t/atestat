import "./App.css";
import "./index.js";

import { Home } from "./Home";

import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dugulas } from "./pages/Dugulas/Dugulas";
import { Szenyviz } from "./pages/Szenyviz/Szenyviz";
import { NoDig } from "./pages/NoDig/NoDig";
import { Camera } from "./pages/Camera/Camera";
import { Meres } from "./pages/Meres/Meres";

const App = () => {
  return (
    <div className="AppMain">
      <BrowserRouter>
        <div className="gradient__bg">
          <Navbar />
        </div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dugulas" element={<Dugulas />} />
          <Route path="/szenyviz" element={<Szenyviz />} />
          <Route path="/nodig" element={<NoDig />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/meres" element={<Meres />} />
        </Routes>

        <div className="footer__bg" id="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
