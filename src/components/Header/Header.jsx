import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/Animations/zoomIn.css";

export const Header = () => {
  return (
    <div className="header zoom_in">
      <div className="header_main">
        <div className="header_comp-motto">
          <div className="header-comp">
            <h1>S.C. CLEAN SPEED S.R.L.</h1>
            <h2>TARGU MURES, STR. BOGATEI, NR. 21</h2>
            {/* TODO: egy uj logo ami szoveges*/}
          </div>
          <div className="header-motto">
            <h3>
              Mi mindent megjavitunk es minden problemat megkapunk! <br /> Mi
              vagyunk a legjobbak es mindent megoldunk
            </h3>
          </div>
          <div className="header-button">
            <button type="button" className="btn btn-outline-info">
              Contact
            </button>
          </div>
        </div>
        <div className="header_services">
          <ul>
            <li>szia</li>
            <li>szia</li>
            <li>szia</li>
            <li>szia</li>
            <li>szia</li>
            <li>szia</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
