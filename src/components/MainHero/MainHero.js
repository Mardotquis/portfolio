import React from 'react';
import MainHeroIcons from './MainHeroIcons';
const MainHero = () => {
    return (
        <div className="mainhero" id="home">
            <h1 className="main_primary_text ">Hello, I'm Marquis!</h1>
            <p className="main_secondary_text"><span className="main_open-brace">&#123;</span>Full Stack Web Developer<span
                className="main_close-brace">&#125;</span></p>
            <ul className="mainhero__icon-container">
                <a className="mainhero__icons"></a>
                <a className="mainhero__icons"></a>
                <a className="mainhero__icons"></a>
            </ul>
        </div>
    )
};

export default MainHero;