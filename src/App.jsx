import "./App.css";
import "./index.js";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Servic } from "./components/servic/Servic";
import { About } from "./components/About/About";
import { Video } from "./components/Video/Video";
import { Gallery } from "./components/Gallery/Gallery";

const App = () => {
  return (
    <div className="AppMain">
      <div className="gradient__bg">
        <Navbar />
      </div>

      <div className="header__bg" id="home">
        <Header />
      </div>

      <div className="servic" id="szolgaltatasok">
        <Servic />
      </div>

      <div className="about_stuff" id="about">
        <About />
      </div>

      <div className="video" id="video">
        <Video />
      </div>

      {/* <div className="gallery" id="gallery">
        <Gallery />
      </div> */}

      <div className="footer__bg" id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
