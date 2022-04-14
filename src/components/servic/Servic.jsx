import React from "react";
import "./Servic.scss";

import image from "../../assets/Images/company_house.png";

export const Servic = () => {
  return (
    <div className="servic_main">
      <h1 style={{ "font-size": 50 }}>Szolgaltatasok</h1>
      <div className="servic-containers">
        <div className="1container container-left container" id="">
          <div className="text-container">
            <h3>Duguláselhárítás</h3>
            <p>
              Ha eldugult a mosdó, zuhanyzó, padlóösszefolyó, kádlefolyó, WC
              lefolyó, vagy a főlefolyó - jó helyen jár - mi igazán kihúzzuk önt
              a ... baj- ból!
            </p>
            <button>Contact me</button>
          </div>
          <div className="img-container">
            <img src={image} alt="picture" className="servic-img" />
          </div>
        </div>
        <div className="2container container-right container" id="">
          <div className="img-container">
            <img src={image} alt="picture" className="servic-img" />
          </div>
          <div className="text-container">
            <h3>Szennyvíz szippantás - szennyvíz elszállítás</h3>
            <p>
              Nem veszélyes hulladék iszap, szennyvíz elszállítását vállaljuk az
              ügyfél által megadott helyen, aminek az elszállítása szippantós
              tartálykocsival történik, majd a cégünk által szerződött
              szennyvíztelepeken lesz tisztítva.
            </p>
            <button>Contact me</button>
          </div>
        </div>
        <div className="3container container-left container" id="">
          <div className="text-container">
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
            <button>Contact me</button>
          </div>
          <div className="img-container">
            <img src={image} alt="picture" className="servic-img" />
          </div>
        </div>
        <div className="4container container-right container" id="">
          <div className="img-container">
            <img src={image} alt="picture" className="servic-img" />
          </div>
          <div className="text-container">
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
            <button>Contact me</button>
          </div>
        </div>
        <div className="5container container-left container" id="">
          <div className="text-container">
            <h3>
              Csőtörés bemérés - vízveszteség mérés - vízvezeték és
              fűtésrendszerből
            </h3>
            <p>
              Nyomóvezetékeken keletkezett csőtörés műszeres bemérése amikor
              szemmel nem látható, nem jelenik meg a felszínen a víz, mégis a
              vízóra vízfogyasztást mér.
            </p>
            <button>Contact me</button>
          </div>

          <div className="img-container">
            <img src={image} alt="picture" className="servic-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
