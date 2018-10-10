import React from "react";

const Header = () => {
    const toggleHiddenMenu=()=>{
        const navMenu = document.querySelector('.header__hiddenMenu');
        if(navMenu.style.display === "none" || navMenu.style.display === ""){
            navMenu.style.display = "flex";
        }else{
            navMenu.style.display = "none"
        }
    }
    return (
        <header>
            <nav className="header__nav">
                <a href="#home" className="header__primary_logo"></a>
                <ul className="header__nav_list">
                    <li className="header__nav_listitem"><a href="#projects">Projects</a></li>
                    <li className="header__nav_listitem"><a href="#aboutme">About Me</a></li>
                    <li className="header__nav_listitem"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header--menuicon" onClick={toggleHiddenMenu}></div>
            <nav className="header__nav--hidden">
            <ul className="header__hiddenMenu">
                    <li className="header__nav_listitem"><a href="#projects" onClick={toggleHiddenMenu}>Projects</a></li>
                    <li className="header__nav_listitem"><a href="#aboutme" onClick={toggleHiddenMenu}>About Me</a></li>
                    <li className="header__nav_listitem"><a href="#contact" onClick={toggleHiddenMenu}>Contact</a></li>
                </ul>
                </nav>
        </header>
    )
};

export default Header;