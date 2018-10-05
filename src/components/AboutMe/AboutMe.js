import React from 'react';

const AboutMe = () => {

    return (
        <section id="aboutme" title="About Me">
            <h2 className="section__header__primary">About me</h2>
            <div className="aboutme_content">
                <figure className="about_picture_figure">
                    <img src="/img/gatewaymarquis.jpg" alt="" className="rounded_marquis" />
                    <figcaption className="aboutme__paragraph">Welcome! My name is Marquis Laron Mitchell and I am an young motivated individual who is extremely passionate about technology and innovation. Growing up in Charlotte, N.C., I am a city-boy at heart who fell in love with tech at a very young age. I’ve literally had my career path set on technology since I was about nine years old and always knew that one day I would be working with it, doing something I love! I attended Phillip O. Berry Academy of Technology where I participated in the Engineering Academy and received my NAF diploma along with my high school diploma. Recently, I participated in the Road to Hire program at Red Ventures that has taught me the basics of web development and helped me jump start my career. <span className="important-bold">In about five months, I have went from zero coding experience to being able to build full-stack web applications using modern technologies.</span> Thanks for visiting my portfolio and welcome to my journey!</figcaption>
                </figure>

            </div>
        </section>
    )
};

export default AboutMe;