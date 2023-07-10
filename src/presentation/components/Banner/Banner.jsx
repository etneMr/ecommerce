import React from "react";
import { Header } from "../common";
import './Banner.css';

export default function Banner() {
    return (
        <>
            <div>
                <Header />
                <div className="home-banner">
                    <div className="banner-detail">
                        <div className="detail">
                            <section className="detail-section">New Arrival</section>
                            <h3 className="detail-header">Discover Our New Collection</h3>
                            <p className="detail-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <button className="detail-button">
                                <div className="detail-button-text">Buy Now</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}