import "./Contact.scss";

import { FiPhoneCall } from "react-icons/fi";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// import "./button-send-anim";

export const Contact = () => {
  const sendEmail = (e) => {
    // TODO: use emailJs and send email
  };

  return (
    <div className="big-main">
      <h1>Contact</h1>
      <div className="main">
        <div className="main-follow">
          <div className="phone">
            <FiPhoneCall />
            Tel:{" "}
            <a href="tel:+40744.395.333" className="usable_links">
              +40744.395.333
            </a>
          </div>
          <div className="fax">
            <FaFax /> Fax:{" "}
            <a href="fax:+40365.430.415" className="usable_links">
              +40365.430.415
            </a>
          </div>
          <div className="follow-email">
            <MdEmail />
            E-mail:{" "}
            <a href="mailto:info@cleanspeed.ro" className="usable_links">
              info@cleanspeed.ro
            </a>
          </div>
        </div>
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

          <button>SEND</button>
          {/* <div class="container">
            <button id="button"></button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
