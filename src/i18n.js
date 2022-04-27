import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationRO from "./assets/locales/ro/translation.json";
import translationHU from "./assets/locales/hu/translation.json";

const resources = {
  ro: {
    translation: translationRO,
  },
  hu: {
    translation: translationHU,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: ["ro", "hu"],
    fallbackLng: "ro",
    detection: {
      order: ["htmlTag"],
      // caches: ["cookie"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
