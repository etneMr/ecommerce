import React from "react";
import './ShopBanner.css';

export default function ShopBanner() {
    return (
        <div id="shop-banner">
            <div className="blur-div">
                <div className="shop-title">Shop</div>
                <div className="shop-home">Home <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                </svg><span className="shop-shop"> Shop</span></div>
            </div>
        </div>
    );
}