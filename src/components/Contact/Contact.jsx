import "./Contact.scss";
import corner from "../../assets/Images_for_web/corner.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FiPhoneCall } from "react-icons/fi";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { useTranslation } from "react-i18next";

export const Contact = () => {
  const form = useRef();
  const { t, i18n } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const icon_color = "#BCB4B4";

  // const isMobile = window.innerWidth < 650;

  return (
    <>
      <div className="big-main">
        <img src={corner} alt="" className="corner-piece-left about-corner" />
        <img src={corner} alt="" className="corner-piece-right about-corner" />
        <h1>{t("contact")}</h1>
        <div className="main">
          <div className="main-follow">
            <div className="phone el">
              <div className="follow-icon">
                <FiPhoneCall
                  color={icon_color}
                  // size={30}
                  className="servic-icon"
                />
              </div>
              <a href="tel:+40744.395.333" className="usable_links">
                +40744.395.333
              </a>
            </div>
            <div className="fax el">
              <div className="follow-icon">
                <FaFax
                  color={icon_color}
                  // size={27}
                  className="servic-icon"
                />
              </div>
              <a href="fax:+40365.430.415" className="usable_links">
                +40365.430.415
              </a>
            </div>
            <div className="follow-email el">
              <div className="follow-icon">
                <MdEmail
                  color={icon_color}
                  // size={30}
                  className="servic-icon"
                />
              </div>
              <a href="mailto:info@cleanspeed.ro" className="usable_links">
                info@cleanspeed.ro
              </a>
            </div>
            <div className="follow-location el">
              <div className="follow-icon">
                <IoLocationSharp
                  color={icon_color}
                  // size={30}
                  className="servic-icon"
                />
              </div>
              <a
                href="https://www.google.ro/maps/place/CLEAN+SPEED/@46.5273753,24.5473672,17z/data=!3m1!4b1!4m5!3m4!1s0x474bb7bf659dc3b3:0xe7b01ffe900ad63b!8m2!3d46.5273664!4d24.5495363?hl=ro"
                className="usable_links"
              >
                Targu-Mures, Str. Bogatei nr. 21.
              </a>
            </div>
          </div>
          <div className="vertical-line"></div>
          <form className="main-form" ref={form}>
            <label htmlFor="name" className="label">
              {t("name")}
            </label>
            <input
              type="text"
              name="name"
              className="name cont"
              placeholder="Name"
              tabIndex={1}
            ></input>
            <label htmlFor="email" className="label">
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="email cont"
              placeholder="example@gmail.com"
              tabIndex={2}
            />
            <label htmlFor="message" className="label">
              {t("message")}
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Irjal ocsem..."
              className="message cont"
              tabIndex={3}
            ></textarea>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className="send-button"
              onClick={sendEmail}
              sx={{
                backgroundColor: "#000000",
                "&:hover": { backgroundColor: "#079E00" },
              }}
            >
              {t("send")}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
