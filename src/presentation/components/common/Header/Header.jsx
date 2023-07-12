import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import {
    ImageLogo,
    IconProfile,
    IconFavorite,
    IconCart,
    IconSearch
} from '../../../constants';

export function Header() {
    return (
        <div id="header">
            <Link to="/" id="logo">
                <img src={ImageLogo} alt="logo" className="image" />
                <div className="name">Furniro</div>
            </Link>
            <ul id="header-right">
                <li key="home">
                    <Link className="item" to="/">Home</Link>
                </li>
                <li key="shop">
                    <Link className="item" to="/shop">Shop</Link>
                </li>
                <li key="about">
                    <Link className="item" to="/about">About</Link>
                </li>
                <li key="contact">
                    <Link className="item" to="/contact">Contact</Link>

                </li>
            </ul>

            <div id="header-icon">
                <img className="icon" src={IconProfile} alt="Profile" />
                <img className="icon" src={IconSearch} alt="Search" />
                <img className="icon" src={IconFavorite} alt="Favorite" />
                <img className="icon" src={IconCart} alt="Cart" />
            </div>
        </div>
    );
}