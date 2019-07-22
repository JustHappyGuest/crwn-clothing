import React from 'react';
import {NavLink} from "react-router-dom";
import "./style.scss";

import {ReactComponent as Logo} from "../../assets/images/crown.svg";


const Header = (props) => (
    <div className="header">
        <NavLink className="logo-container" to="/" >
            <Logo/>
        </NavLink>
        <div className="options">
            <NavLink className="option" to="/shop">SHOP</NavLink>
            <NavLink className="option" to="/contact">CONTACT</NavLink>
        </div>
    </div>
);

export default Header;