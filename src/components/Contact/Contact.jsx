import "./Contact.scss";

import { FiPhoneCall } from "react-icons/fi";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const sendEmail = (e) => {
    // TODO: use emailJs and send email
  };

  return (
    <div className="big-main">
      <h1>Contact</h1>
      <div className="main">
        <div className="main-follow">
          <div className="phone el">
            <div className="icon">
              <FiPhoneCall />
            </div>
            <a href="tel:+40744.395.333" className="usable_links">
              +40744.395.333
            </a>
          </div>
          <div className="fax el">
            <div className="icon">
              <FaFax />
            </div>
            <a href="fax:+40365.430.415" className="usable_links">
              +40365.430.415
            </a>
          </div>
          <div className="follow-email el">
            <div className="icon">
              <MdEmail />
            </div>
            <a href="mailto:info@cleanspeed.ro" className="usable_links">
              info@cleanspeed.ro
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

          <button>SEND</button>
        </div>
      </div>
    </div>
  );
};
