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
            Hi! My name is Marquis and a self-motivated individual who is seeking an engineering position with a growing organization. I'm a highly skilled Software Engineer with 6+ years of experience specializing in full-stack development and front-end technologies, particularly JavaScript frameworks such as React.js, Node.js, and Next.js. Proven track record of leading complex projects, improving application performance, and implementing best practices in web accessibility and security. I am extremely passionate about technology and innovation, and enjoy sharing that passion with teammates to build high quality software.
          </figcaption>
          <figcaption className="aboutme__paragraph">
          I have experience building elegant UIs and have extensive knowledge working with modern front end technologies like JavaScript/TypeScript, React, Next.js, HTML, and CSS. In previous roles, I've developed design systems using Storybook to showcase these modular components and understand the importance of them. I've also built integrations in our Software Development Lifecycle using tools like Webpack, Vite, and Eslint to improve the quality of our codebase.

            I also have experience working with back end technologies such as AWS' cloud platform and using languages/services like Node.js, PHP, Python, MySQL + DynamoDB, Docker, GraphQL, and CI/CD pipeline practices. Lastly, I'm well aware of the importance of developing with web accessibility, responsiveness, and efficiency in mind.
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
