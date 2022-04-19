import "./App.css";
import "./index.js";

import { useState } from "react";

import { Home } from "./Home";

import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LearnMore } from "./pages/LearnMore/LearnMore";
import { LanguageModal } from "./components/Modal/LanguageModal";

// ###############Learn More Import#########################
import { useTranslation } from "react-i18next";

import dugulas_img1 from "./assets/Images/cleaning.png";
import dugulas_img2 from "./assets/Images/company_house.png";
import dugulas_img3 from "./assets/Images/inliner.jpeg";

import szenyviz_img1 from "./assets/Images/cleaning.png";
import szenyviz_img2 from "./assets/Images/robot.jpg";
import szenyviz_img3 from "./assets/Images/company-cars.png";

import nodig_img1 from "./assets/Images/robot.jpg";
import nodig_img2 from "./assets/Images/robot.jpg";
import nodig_img3 from "./assets/Images/robot.jpg";

import camera_img1 from "./assets/Images/robot.jpg";
import camera_img2 from "./assets/Images/robot.jpg";
import camera_img3 from "./assets/Images/robot.jpg";

import meres_img1 from "./assets/Images/robot.jpg";
import meres_img2 from "./assets/Images/robot.jpg";
import meres_img3 from "./assets/Images/robot.jpg";

// ###############Learn More Import#########################

const App = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className="AppMain">
      <BrowserRouter>
        <div className="gradient__bg">
          <Navbar showModal={showModal} setShowModal={setShowModal} />
        </div>
        <LanguageModal showModal={showModal} setShowModal={setShowModal} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/dugulas"
            element={
              <LearnMore
                title={t("dugulas_cim")}
                p1={t("dugulas1")}
                p2={t("dugulas2")}
                p3={t("dugulas3")}
                p4={t("dugulas4")}
                p5={t("dugulas1")}
                yt1=""
                yt2=""
                yt3=""
                img1={dugulas_img1}
                img2={dugulas_img2}
                img3={dugulas_img3}
              />
            }
          />
          <Route
            path="/szenyviz"
            element={
              <LearnMore
                title={t("szenyviz_cim")}
                p1={t("szenyviz1")}
                p2={t("szenyviz2")}
                p3={t("szenyviz3")}
                p4={t("szenyviz4")}
                p5={t("szenyviz5")}
                yt1=""
                yt2=""
                yt3=""
                img1={szenyviz_img1}
                img2={szenyviz_img2}
                img3={szenyviz_img3}
              />
            }
          />
          <Route path="/nodig" element={<LearnMore />} />
          <Route path="/camera" element={<LearnMore />} />
          <Route path="/meres" element={<LearnMore />} />
        </Routes>

        <div className="footer__bg" id="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

//               ..,,:::;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;::1ffLLLLLLLLLLL
//              ..,,::;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;::::iiiiiiii;ii11ttttttttt
//           .,,,:;;;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,:;iiiiiiiiiiiii;;;;;;;;;;
//         .,..,:;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,t1iiiiiiiiiiiiiiiiiiiiiiiii
//            :iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;,  ;C00L1iiiiiiiiiiiiiiiiiiiiiii
//           :iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;,  :tG0000Gfiiiiiiiiiiiiiiiiiiiiii
// ::::::,,..;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,tG00000000Liiiiiiiiiiiiiiiiiiiii
// ;;;;iiii::iiiiiiiiiiiiiiiiiiiii;iiiiiiiiii;.  ;C00000000000C1iiiiiiiiiiiiiiiiiii
// 11i;::;i;;iiiiiiiiiiiiiiii;;;iiii;iiiiii;,  :f0Ct11fC0000000G1;iiiiiiii;;;;i:;ii
// 11111i;:;iiiiiiiiiiiiiiiiiiiiiiii:;iii;,  ,tG00i,. .,iL000000L,:iii;;;;itLCf:ii;
// 1111111i:;iiiiiiiiiiiiiiiiiiii;;iii;:,..,:t0000t,    .:L0000C;,,;;;ifCG88@@L:;;:
// 11111111i;iiiiiiiiiiiiiiiiiiiiiii;;;:::;ii;f000Gt:.. .:f000L;,::;tG8@@@@88Gt:;;i
// 11111111i;iiiiiiiiiiiiiiiiiiiiiii,.:,::;;ii;f0000Cft1tLG0Gf::,,iC8@@8@80CC0C;iii
// 11111111;;iiiiiiiiiiiiiiiiiiii;,.  :;;:;:;ii;1C00000000GLi::,iC8@88@80CG8@@81;;i
// 1111iii;;iiiiiiiiiiiiiiiiiii;,  ..:iiii;:;iii;itCGGGCLti;:::f8@888@8CC8@@@@@8L1i
// 1111;;;;;;;;iiiiiiiiiiiiii;.  .iLCt;;ii;;iiiiii;;i;:::,:::;L8@888@0L0@@@@@@@@8Gf
// 1111111i;;:;iiiiiiiiiiii;,  .1C0000Gt;;iiiiiiiiiii;:;;;;;;G@8888@GC8@@@@@@@8GG08
// 111111i;;;;:iiiiiiiiiii:.  :LGLLLCG00C1;;iiiiiiiiiiiiii;iG@888@@CC@@@@@@@0CG8@@@
// i1111111111;;iiiiiiiii:  .1GL;,..,iL000Li;iiiiiiiiiiii;i0@888@@0C@@@@@@8CC8@@@@@
// .,;i11111111;;iiiiiii:  ;L001,    .:f000Gi:iiiiiiiii;;;C@8888@@@@@@@@8GC8@@@@@@@
//    .,:;iiiii;:;iiiii:  iGG00L:.    .;G000L,;iiii;::::::C8@@8@@@@@@@@0C0@@@@@@@@@
//         ..... .:iiii: .tGGG00L1;,..,iGGGGf.:;iii;,..,. .:f88@@@@@@@CC8@@@@@@@@@@
//                 :iii;.:;tGGGG00GCLffCGGGL:,:iiii;..f0i    L@@@@@@@@8@@@@@88@@@@@
//                  ,:ii;ii;1LGGGGG00GGGGGf;::;ii;;, ;8t.    f@@@@@@@@@@@@@@@8@@@@@
//                    ,;iiiii;1LGGGGGGGGLi,:;:;i1tfi .:      C@@@@@@@@@8GLC8@@@@@@@
//                     .:iiiii;i1fLCCCCt:,:;;:1C08@0i:::::;;i0@@@@@@@0LiiG@@@@@@@@@
//                       ,;iiiiii;iii;:,:;;;;t8@@8@@@88888@@@@@8088G1::f8@@@@@@@@@@
//                        .:iiiiiiii;;;;iii;f8@@@@@@@@@@@@@@@@@@8Gi,,t08G0@@@@@@@@@
//                          ,;iiiiiiiiiiii;i8@80GG@@@@@@@@@@@@@@8t:1G80G88888@@@@@@
//                           .:iiiiiiiiiii;180CC0@@@@@@@@@@@@@@@CL08008@@888@@@@@@@
//                             :iiiiiiiiii;;CG88@@@@@8GG0@@@@@@@@@@@@@888@@@@@@@@@@
//                             ,iiiiiiii;:::0@@8@@8GGG0@@@@@@888@@@@@@@@@@@@@@@@@@@
//                                    :1ffLLt1;,
