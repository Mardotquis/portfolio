import React from "react";

const Header = () => {
    return (
        <header>
            <nav className="header__nav">
                <div className="header__primary_logo"></div>
                <ul className="header__nav_list">
                    {/* <li className="header__primary_logo"></li> */}
                    <li><a>About Me</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;