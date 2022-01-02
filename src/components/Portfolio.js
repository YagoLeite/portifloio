import React from "react";
import netflix from "../images/yagoflix.png";
import foodapp from "../images/foodapp.png";
import curriculum from "../images/curriculum.png";
import musicplayer from "../images/musicplayer.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Pofrfolio = () => {
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
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://yagoflix-14b2a.web.app/#", "_blank")
          }
        >
          https://yagoflix-14b2a.web.app/#
        </a>
        <br />
        <b>GitHub:</b>{" "}
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

  // Food App
  const openPopupboxFoodApp = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={foodapp}
          alt="City Guide App Project..."
        />
        <p>
          Practice React application using hooks. Also, data is being fetched
          from Firebase.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://food-app-5f5e6.firebaseapp.com", "_blank")
          }
        >
          https://food-app-5f5e6.firebaseapp.com
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/YagoLeite/Food-App", "_blank")
          }
        >
          https://github.com/YagoLeite/Food-App
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Food App project.",
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
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://yagoleite.github.io/My-Cv/", "_blank")
          }
        >
          https://yagoleite.github.io/My-Cv/
        </a>
        <br />
        <b>GitHub:</b>{" "}
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

  // Task Manager React and Redux Project
  const openPopupboxMediaPlayer = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={musicplayer}
          alt="Task Manager React and Redux Project..."
        />
        <p>Media player using only HTML, CSS and JavaScript.</p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://yagoleite.github.io/music-player/", "_blank")
          }
        >
          https://yagoleite.github.io/music-player/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/YagoLeite/music-player", "_blank")
          }
        >
          https://github.com/YagoLeite/music-player
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Music player project.",
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
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img
              className="portfolio-image"
              src={netflix}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxFoodApp}>
            <img
              className="portfolio-image"
              src={foodapp}
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
            onClick={openPopupboxMediaPlayer}
          >
            <img
              className="portfolio-image"
              src={musicplayer}
              alt="Task Manager React and Redux Project..."
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
    </div>
  );
};

export default Pofrfolio;
