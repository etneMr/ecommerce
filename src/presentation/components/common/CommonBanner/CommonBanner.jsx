import React from "react";
import './CommonBanner.css';
import { ImageLogo } from "../../../constants";

export function CommonBanner({ pageName }) {
    return (
        <div id="common-banner">
            <div className="blur-div">
                <img className="common-icon" src={ImageLogo} alt="Logo" />
                <div className="common-title">{pageName}</div>
                <div className="common-home">Home <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                </svg><span className="common-common"> {pageName}</span></div>
            </div>
        </div>
    );
}