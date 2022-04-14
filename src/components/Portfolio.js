import React from "react";
import netflix from "../images/yagoflix.png";
import jokenpo from "../images/jokenpo.png";
import curriculum from "../images/curriculum.png";
import countrycodex from "../images/countrycodex.png";
import crypto from "../images/crypto.png";
import adviceapp from "../images/adviceapp.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Pofrfolio = () => {
  // Crypto
  const openPopupboxCrypto = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={crypto}
          alt="Crypto Tracker project"
        />
        <p>A Crypto currency tracker</p>
        <b className="respirada">Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://crypto-tracker-3e62e.web.app", "_blank")
          }
        >
          https://crypto-tracker-3e62e.web.app
        </a>
        <br />
        <b className="respirada">GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/YagoLeite/crypto-tracker")
          }
        >
          https://github.com/YagoLeite/crypto-tracker
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Crypto Tracker.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="Netflix Clone Project..."
        />
        <p>My first attempt at recreating a famous website using React.</p>
        <b className="respirada">Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://yagoflix-14b2a.web.app/#", "_blank")
          }
        >
          https://yagoflix-14b2a.web.app/#
        </a>
        <br />
        <b className="respirada">GitHub:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/YagoLeite/yagoflix")}
        >
          https://github.com/YagoLeite/yagoflix
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Netflix clone project.",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Jokenpo
  const openPopupboxJokenpoApp = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={jokenpo}
          alt="Rock, Paper and Scissors App Project..."
        />
        <p>Challenge by Frontend Mentor</p>
        <b className="respirada">Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://jokenpo-inky.vercel.app", "_blank")
          }
        >
          https://jokenpo-inky.vercel.app
        </a>
        <br />
        <b className="respirada">GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/YagoLeite/jokenpo", "_blank")
          }
        >
          https://github.com/YagoLeite/jokenpo
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Frontend Mentor Challenge - Rock, Paper and Scissors",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Curriculum Project
  const openPopupboxCurriculum = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={curriculum}
          alt="Portfolio Project..."
        />
        <p>My web-curriculum using only HTML, CSS and JavaScript.</p>
        <b className="respirada">Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://yagoleite.github.io/My-Cv/", "_blank")
          }
        >
          https://yagoleite.github.io/My-Cv/
        </a>
        <br />
        <b className="respirada">GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/YagoLeite/My-Cv", "_blank")
          }
        >
          https://github.com/YagoLeite/My-Cv
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "My Curriculum",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Country Codex Project
  const openPopupboxCountryCodex = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={countrycodex}
          alt="Country Codex Project..."
        />
        <p>Challenge by Frontend Mentor</p>
        <b className="respirada">Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://country-codex.vercel.app", "_blank")
          }
        >
          https://country-codex.vercel.app
        </a>
        <br />
        <b className="respirada">GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/YagoLeite/where-in-the-world",
              "_blank"
            )
          }
        >
          https://github.com/YagoLeite/where-in-the-world
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Frontend Mentor Challenge - Rest Country API",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // React router practice

  const openPopupbox = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={adviceapp}
          alt="Advice Project..."
        />
        <p>Frontend Mentor Challenge - Advice Generator</p>
        <b className="respirada">Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://advice-generator-sigma.vercel.app", "_blank")
          }
        >
          https://advice-generator-sigma.vercel.app
        </a>
        <br />
        <b className="respirada">GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/YagoLeite/advice-generator",
              "_blank"
            )
          }
        >
          https://github.com/YagoLeite/advice-generator
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Frontend Mentor Challenge - Advice Generator",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row display-grid">
          <div className="portfolio-image-box" onClick={openPopupboxCrypto}>
            <img
              className="portfolio-image"
              src={crypto}
              alt="Crypto Tracker."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxJokenpoApp}>
            <img
              className="portfolio-image"
              src={jokenpo}
              alt="Food App Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCurriculum}>
            <img
              className="portfolio-image"
              src={curriculum}
              alt="Curriculum..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxCountryCodex}
          >
            <img
              className="portfolio-image"
              src={countrycodex}
              alt="Task Manager React and Redux Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupbox}>
            <img
              className="portfolio-image"
              src={adviceapp}
              alt="Task Manager React and Redux Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img
              className="portfolio-image"
              src={netflix}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer />
      <PopupboxContainer />
      <PopupboxContainer />
      <PopupboxContainer />
      <PopupboxContainer />
      <PopupboxContainer />
    </div>
  );
};

export default Pofrfolio;
