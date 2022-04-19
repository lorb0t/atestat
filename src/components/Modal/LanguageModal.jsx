import i18next, { changeLanguage } from "i18next";
import "./LanguageModal.scss";
import { motion, AnimatePresence } from "framer-motion";

import magyar from "./magyar.svg";
import roman from "./roman.svg";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const comeIn = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-100vh" },
};

export const LanguageModal = ({ showModal, setShowModal }) => {
  const ChangeLanguage = (props) => {
    i18next.changeLanguage(props);
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            variants={comeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="language-box"
          >
            <p onClick={() => ChangeLanguage("hu")}>
              <span className="ctr-logo">
                <img src={magyar} alt="" className="magyar-flag" />
              </span>
              Magyar
            </p>
            <p onClick={() => ChangeLanguage("ro")}>
              <span className="ctr-logo">
                <img src={roman} alt="" className="roman-flag" />
              </span>
              Română
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
