import React from "react";
import './Footer.css';

export function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="contact">
                    <div className="footer-detail">
                        <h2 style={{ margin: 0 }}>Funiro.</h2>
                        <div className="address">400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA</div>
                    </div>
                    <div className="field">
                        <InfoField title="Links" children={<LinkOptions />} />
                    </div>
                    <div className="field">
                        <InfoField title="Helps" children={<HelpOptions />} />
                    </div>
                    <div className="email-field">
                        <InfoField title="Newsletter" children={<EmailField />} />
                    </div>

                </div>
                <div className="article">2023 furino. All rights reverved</div>
            </div>
        </footer>
    );
}

function InfoField({ title, children }) {
    return (
        <>
            <div className="title">{title}</div>
            {children}
        </>
    );
}

function LinkOptions() {
    return (
        <div className="option-container">
            <div className="option">Home</div>
            <div className="option">Shop</div>
            <div className="option">About</div>
            <div className="option" style={{ padding: "0px" }}>Contact</div>
        </div>
    );
}

function HelpOptions() {
    return (
        <div className="option-container">
            <div className="option">Payment Options</div>
            <div className="option">Returns</div>
            <div className="option" style={{ padding: "0px" }}>Privacy Policies</div>
        </div>
    );
}

function EmailField() {
    return (
        <form className="email-container">
            <input className="email" type="text" placeholder="Enter Your Email Address" ></input>
            <input className="subcribe" type="submit" value="SUBSCRIBE" />
        </form>
    );
}