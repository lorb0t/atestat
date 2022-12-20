import { Header } from "./components/Header/Header";
import { Servic } from "./components/servic/Servic";
import { About } from "./components/About/About";
import { Video } from "./components/Video/Video";
import { Gallery } from "./components/Gallery/Gallery";
import { Contact } from "./components/Contact/Contact";
import Lineing from "./components/Linening/Lineing";

export const Home = () => {
  return (
    <div>
      <div className="header__bg" id="home">
        <Header />
      </div>

      <div className="about_stuff" id="about">
        <About />
      </div>

      <div>
        <Lineing />
      </div>

      <div className="servic" id="szolgaltatasok">
        <Servic />
      </div>

      <div className="video" id="video">
        <Video />
      </div>

      <div className="gallery" id="gallery">
        <Gallery />
      </div>

      <div className="contact" id="contact">
        <Contact />
      </div>
    </div>
  );
};
