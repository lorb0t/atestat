import "./App.css";
import "./index.js";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="AppMain">
      <div className="gradient__bg">
        <Navbar />
      </div>

      <div className="header__bg" id="header">
        <Header />
      </div>

      <div className="footer__bg" id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
