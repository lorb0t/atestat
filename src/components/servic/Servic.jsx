import "./Servic.scss";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import image from "../../assets/Images/company_house.png";
import cleaning from "../../assets/Images/cleaning.png";
import szippantas from "../../assets/Images/Kamion1.jpeg";
import inliner from "../../assets/Images/inliner.jpeg";
import robot from "../../assets/Images/robot.jpg";
import bemeres from "../../assets/Images/bemeres.jpg";

export const Servic = () => {
  const cont1 = useInView({
    threshold: 0,
  });
  const cont2 = useInView({
    threshold: 0,
  });
  const cont3 = useInView({
    threshold: 0,
  });
  const cont4 = useInView({
    threshold: 0,
  });
  const cont5 = useInView({
    threshold: 0,
  });

  return (
    <div className="servic_main">
      <h1>Szolgaltatasok</h1>
      <div className="servic-containers">
        <div className="1container container-left container" id="cont1">
          <div className="text-container" id="cont1" ref={cont1.ref}>
            <h3>Duguláselhárítás</h3>
            <p>
              Ha eldugult a mosdó, zuhanyzó, padlóösszefolyó, kádlefolyó, WC
              lefolyó, vagy a főlefolyó - jó helyen jár - mi igazán kihúzzuk önt
              a ... baj- ból!
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">
                <Link to="/dugulas">Tudj meg többet</Link>
              </span>
            </button>
          </div>
          <motion.div
            className="img-container"
            initial={{ x: "40vw" }}
            animate={{
              x: `${cont1.inView ? 0 : "35vw"}`,
              visibility: `${cont1.inView ? "visible" : "hidden"}`,
            }}
            transition={{ duration: 1.5 }}
          >
            <img src={cleaning} alt="picture" className="servic-img" />
          </motion.div>
        </div>
        <div className="2container container-right container" id="cont2">
          <motion.div
            className="img-container"
            initial={{ x: "-40vw" }}
            animate={{
              x: `${cont2.inView ? 0 : "-35vw"}`,
              visibility: `${cont2.inView ? "visible" : "hidden"}`,
            }}
            transition={{ duration: 1.5 }}
          >
            <img src={szippantas} alt="picture" className="servic-img" />
          </motion.div>
          <div className="text-container" ref={cont2.ref}>
            <h3>Szennyvíz szippantás - szennyvíz elszállítás</h3>
            <p>
              Nem veszélyes hulladék iszap, szennyvíz elszállítását vállaljuk az
              ügyfél által megadott helyen, aminek az elszállítása szippantós
              tartálykocsival történik, majd a cégünk által szerződött
              szennyvíztelepeken lesz tisztítva.
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">
                <Link to="/szenyviz">Tudj meg többet</Link>
              </span>
            </button>
          </div>
        </div>
        <div className="3container container-left container" id="cont3">
          <div className="text-container" ref={cont3.ref}>
            <h3>
              Lefolyó cső ásás nélküli javítása <br /> (No dig technologia)
            </h3>
            <p>
              A csatornarendszer feltárását követően gyakran egy vagy több
              hibára derül fény, aminek az ásással - bontással történő javítása
              komoly károkkal és kellemetlenséggel jár. Az innovatív
              tehnológiának köszönhetően a legtöbb esetben a hibák javíthatóak
              ásás nélkül, a lefolyócső belsejében kialakítva új felületet.
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">
                <Link to="/javitas">Tudj meg többet</Link>
              </span>
            </button>
          </div>
          <motion.div
            className="img-container"
            initial={{ x: "40vw" }}
            animate={{
              x: `${cont3.inView ? 0 : "35vw"}`,
              visibility: `${cont3.inView ? "visible" : "hidden"}`,
            }}
            transition={{ duration: 1.5 }}
          >
            <img src={inliner} alt="picture" className="servic-img" />
          </motion.div>
        </div>
        <div className="4container container-right container" id="cont4">
          <motion.div
            className="img-container"
            initial={{ x: "-40vw" }}
            animate={{
              x: `${cont4.inView ? 0 : "-35vw"}`,
              visibility: `${cont4.inView ? "visible" : "hidden"}`,
            }}
            transition={{ duration: 1.5 }}
          >
            <img src={robot} alt="picture" className="servic-img" />
          </motion.div>
          <div className="text-container" ref={cont4.ref}>
            <h3>Csatornavezetékek/lefolyócsövek videóvizsgálata(CCTV)</h3>
            {/* TODO: megkerdezni hogy itt a cim jo e */}
            <p>
              A videóvizsgálat már nélkülözhetetlen művelet annak érdekében,
              hogy meghatározzuk az elöregedett vezetékek állapotát, vagy
              leellenőrizzük az elvégzett munkálatok minőségét. A CCTV
              felszerelés megjeleníti a vezetékek belsejét, meghatározva ezáltal
              a lefolyók megismétlődő dugulás okát, a csatornahálózat hibás
              mükődését, a kiszívárgások lokációját, stb.
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">
                <Link to="/cctv">Tudj meg többet</Link>
              </span>
            </button>
          </div>
        </div>
        <div className="5container container-left container" id="cont5">
          <div className="text-container" ref={cont5.ref}>
            <h3>
              Csőtörés bemérés - vízveszteség mérés - vízvezeték és
              fűtésrendszerből
            </h3>
            <p>
              Nyomóvezetékeken keletkezett csőtörés műszeres bemérése amikor
              szemmel nem látható, nem jelenik meg a felszínen a víz, mégis a
              vízóra vízfogyasztást mér.
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">
                <Link to="/csotores">Tudj meg többet</Link>
              </span>
            </button>
          </div>

          <motion.div
            className="img-container"
            initial={{ x: "40vw" }}
            animate={{
              x: `${cont5.inView ? 0 : "40vw"}`,
              visibility: `${cont5.inView ? "visible" : "hidden"}`,
            }}
            transition={{ duration: 1.5 }}
          >
            <img src={bemeres} alt="picture" className="servic-img" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
