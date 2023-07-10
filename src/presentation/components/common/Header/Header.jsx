import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
    return (
        <div className="header">
            <Link to="/" class="logo">CompanyLogo</Link>
            <div className="header-right">
                <Link className="active" to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}