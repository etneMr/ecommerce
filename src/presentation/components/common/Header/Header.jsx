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

            <div id="header-right">
                <div key="home">
                    <Link className="item" to="/">Home</Link>
                </div>
                <div key="shop">
                    <Link className="item" to="/shop">Shop</Link>
                </div>
                <div key="about">
                    <Link className="item" to="/about">About</Link>
                </div>
                <div key="contact">
                    <Link className="item" to="/contact" style={{ paddingRight: 0 }}>Contact</Link>

                </div>
            </div>

            <div id="header-icon">
                <img className="icon" src={IconProfile} alt="Profile" />
                <img className="icon" src={IconSearch} alt="Search" />
                <img className="icon" src={IconFavorite} alt="Favorite" />
                <img className="icon" src={IconCart} alt="Cart" style={{ paddingRight: 0 }} />
            </div>
        </div>
    );
}