import React from 'react';
import MainHeroIcons from './MainHeroIcons';
const MainHero = (props) => {


    console.log(props.mainHeroIcons)
    return (
        <div className="mainhero" id="home">
            <h1 className="main_primary_text ">Hello, I'm Marquis!</h1>
            <p className="main_secondary_text"><span className="main_open-brace">&#123;</span>Full Stack Web Developer<span
                className="main_close-brace">&#125;</span></p>
            <ul className="mainhero__icon-container">
                {props.mainHeroIcons.map(icon=>{
                    return(
                        <MainHeroIcons
                        iconPath={icon.iconPath}
                        iconLink={icon.iconLink}
                        />
                    )
                })}
            </ul>
            <div className="main--downarrow_container">
                <a className="main--downarrow" onClick={()=>props.scrollIntoThisDiv("projects")}/>
                <a className="main--downarrow_text" onClick={()=>props.scrollIntoThisDiv("projects")}>See More</a>
            </div>
        </div>
    )
};

export default MainHero;