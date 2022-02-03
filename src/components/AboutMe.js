import React from "react";
// import author from "../me.jpg";
import author from "../images/perfilimg.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p className="bigger-paragraph">
            Hello! I am Yago. Currently, I am a Mathematics teacher at The
            British School of Rio de Janeiro. I started studying web development
            in 2021. So far, I’ve managed to learn some key technologies such as
            JavaScript, React, NextJS, Redux, Chakra UI, Routing and Git. I
            started my journey with simple HTML, CSS and JavaScript. As I
            developed my JavaScript skills, I started a React course at Udemy.
            There, I’ve learned the core of React applications and how to
            manipulate state using hooks. Right now, I’m looking forwards to
            changing careers, applying what I’ve learned and continue to develop
            my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

// Hello! I am Andrew. I have been developing websites for over 5 years. I'm Full-Stack Web Developer. Technologies I use is MERN(MongoDB, Express, ReactJS and NodeJS). I create responsive websites that are displayed on all devices desktops and smartphones. Of course, before I begin developing any webapp, Landing Page, Business Website or E-commerce, I need to have a ready-made project layout (sketch). And I’m ready to do this for you, before we start developing your website, we will discuss all the details of your niche with you, I will conduct a survey of your competitors and make a list of their advantages and weaknesses. All this is necessary to give your customers something that your competitors do not provide, or to present it too, but better! After the website is finished and ready to deploy and sell a product or service. It is essential that your potential clients know about you. I will create an advertising campaign for you in Google Adwords and Facebook!
