import React from 'react';

const AboutMe = () => {
  return (
    <section id="aboutme" title="About Me">
      <h2 className="section__header__primary">About me</h2>
      <div className="aboutme_content">
        <figure className="about_picture_figure">
          <img
            src="/img/gatewaymarquis.jpg"
            alt=""
            className="rounded_marquis"
          />
          <figcaption className="aboutme__paragraph">
            Hi! My name is Marquis and I'm a self-motivated Software Engineer who is extremely passionate about technology and innovation. I have a vast array of knowledge in several programming languages, frameworks, modern web development standards, and engineering best practices.
          </figcaption>
          <p className="aboutme__paragraph bottom">
            In 2018, I participated in the Road to Hire program at Red Ventures
            which taught me the basics of web development and helped me jump
            start my career.
            Within 6 months I went from very little coding experience to being
            able to build full-stack web applications using modern
            technologies by myself.
            After Road to Hire I was blessed with the opportunity to join Red
            Ventures as a Software Engineer and can't wait to see where my new
            career takes me. Thanks for visiting my portfolio and welcome to my
            journey!
          </p>
        </figure>
      </div>
    </section>
  );
};

export default AboutMe;
