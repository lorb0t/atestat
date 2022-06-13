import "./Contact.scss";
import corner from "../../assets/Images_for_web/corner.svg";
import React, { useRef } from "react";
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
        "service_tlnwtvy", //service Id
        "template_aasgko2",
        // form.current,
        form.current,
        "DlFgtAwRZeNciL-NZ"
      )
      .then(
        (result) => {
          // console.log(form.current);
          window.location.reload(false);
          console.log(result.text);
        },
        (error) => {
          alert("ERROR");
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
              <a href="tel:+40751.090.151" className="usable_links">
                +40751.090.151
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
          <form className="main-form" ref={form} onSubmit={sendEmail}>
            <label htmlFor="from_name" className="label">
              {t("name")}
            </label>
            <input
              type="text"
              name="from_name"
              className="name cont"
              placeholder={t("name_1")}
              tabIndex={1}
              required
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
              required
            />
            <label htmlFor="message" className="label">
              {t("message")}
            </label>
            <textarea
              name="message"
              id="message"
              placeholder={t("message_1")}
              className="message cont"
              tabIndex={3}
              required
            ></textarea>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className="send-button"
              type="submit"
              // onClick={sendEmail}
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
