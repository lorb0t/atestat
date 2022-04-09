import "./App.css";
import "./index.js";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/navbar/Navbar";

const App = () => {
  const Name = "lori";
  const idk = true;

  return (
    <div className="AppMain">
      <div className="gradient__bg">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
