import React from "react";

const Header = () => {
    return (
        <header>
            <nav className="header__nav">
                <div className="header__primary_logo"></div>
                <ul className="header__nav_list">
                    {/* <li className="header__primary_logo"></li> */}
                    <li className="header__nav_listitem"><a href="#aboutme">About Me</a></li>
                    <li className="header__nav_listitem"><a href="#projects">Projects</a></li>
                    <li className="header__nav_listitem"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;