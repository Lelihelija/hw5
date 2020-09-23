import React from "react";
import './styles.css';
import {headerMenu} from '../App.js';
import {NavLink} from 'react-router-dom';

const Header = (props) => {

    return (
        <div className="header-wrapper">
            <h1 className="motivational-text"><i className="material-icons">insert_emoticon</i>Крута домашка!</h1>
            <ul className="navigation-menu">
                {headerMenu.map((menuItem, index) => (
                    <li key={index}>
                        <NavLink to={menuItem.path}
                                activeClassName="header-menu-item__active"
                                className="header-smenu-item menu-item">
                            {menuItem.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header;

