import "./Contact.scss";
import corner from "../../assets/Images_for_web/corner.svg";

import { FiPhoneCall } from "react-icons/fi";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { width } from "@mui/system";

export const Contact = () => {
  const sendEmail = (e) => {
    alert("szia");
    // TODO: use emailJs and send email
  };

  const icon_color = "#BCB4B4";

  return (
    <>
      <img src={corner} alt="" className="corner-piece-left" />
      <img src={corner} alt="" className="corner-piece-right" />
      <div className="big-main">
        <h1>Contact</h1>
        <div className="main">
          <div className="main-follow">
            <div className="phone el">
              <div className="follow-icon">
                <FiPhoneCall color={icon_color} size={30} />
              </div>
              <a href="tel:+40744.395.333" className="usable_links">
                +40744.395.333
              </a>
            </div>
            <div className="fax el">
              <div className="follow-icon">
                <FaFax color={icon_color} size={27} />
              </div>
              <a href="fax:+40365.430.415" className="usable_links">
                +40365.430.415
              </a>
            </div>
            <div className="follow-email el">
              <div className="follow-icon">
                <MdEmail color={icon_color} size={30} />
              </div>
              <a href="mailto:info@cleanspeed.ro" className="usable_links">
                info@cleanspeed.ro
              </a>
            </div>
            <div className="follow-location el">
              <div className="follow-icon">
                <IoLocationSharp color={icon_color} size={30} />
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
          <div className="main-form">
            <label htmlFor="name" className="label">
              Name:
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
              Message:
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
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
