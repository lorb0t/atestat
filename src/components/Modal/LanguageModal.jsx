import i18next from "i18next";
import "./LanguageModal.scss";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const comeIn = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-100vh" },
};

export const LanguageModal = ({ showModal, setShowModal, magyar, roman }) => {
  const ChangeLanguage = (props) => {
    i18next.changeLanguage(props);
    setShowModal(false);
  };

  const isRo = () => {
    if ("ro" === i18next.language) return true;
    else return false;
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
