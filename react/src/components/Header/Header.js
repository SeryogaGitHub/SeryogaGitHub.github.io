import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.main_header}>
            <div>
                <div className={s.logo}>
                    <img src="https://cdn.worldvectorlogo.com/logos/slack-1.svg" alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header;

