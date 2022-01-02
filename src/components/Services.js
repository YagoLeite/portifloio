import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faDesktop,
  faFileCode,
  faLayerGroup,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>
                I approach each project individually and always focus on the
                result.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>

              <h3>Web Development</h3>
              <p>Your website will be build with the newest technologies.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faLayerGroup}
                  size="2x"
                />
              </div>

              <h3>Responsive Design</h3>
              <p>Your application working properly on every screen</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faAddressCard}
                  size="2x"
                />
              </div>
              <h3>Landing Pages</h3>
              <p>Well written and designed websites</p>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
