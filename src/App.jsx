import "./App.css";
import "./index.js";

import { Home } from "./Home";

import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LearnMore } from "./pages/LearnMoreDef/LearnMore";

const App = () => {
  return (
    <div className="AppMain">
      <BrowserRouter>
        <div className="gradient__bg">
          <Navbar />
        </div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dugulas" element={<LearnMore name="lori" age="17" />} />
        </Routes>

        <div className="footer__bg" id="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
