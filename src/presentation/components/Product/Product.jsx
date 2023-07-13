import React from "react";
import './Product.css';
import { Header, Footer } from '../common';
import { MainImage, ImageSofa1, ImageSofa2, ImageSofa3, ImageSofa4 } from "../../constants";

export default class Product extends React.Component {
    render() {
        return (
            <>
                <Header />
                <ProductRef name="Asgaard sofa" />
                <ProductComponent />
                <Footer />
            </>
        );
    }

}

function ProductRef({ name }) {
    return (
        <div id="product-ref">
            <div className="product-ref-text">
                <div className="text">Home</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                </svg>
            </div>
            <div className="product-ref-text">
                <div className="text">Shop</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                </svg>
            </div>
            <div className="product-ref-name">
                {name}
            </div>

        </div>
    );
}

function ProductComponent() {
    return (
        <div id="product-component">
            <ProductImage />
            <ProductInformation />
        </div>
    );
}

function ProductImage() {
    return (
        <div id="product-image">
            <div className="sub-image">
                <img className="image" src={ImageSofa1} alt="main sofa" />
                <img className="image" src={ImageSofa2} alt="main sofa" />
                <img className="image" src={ImageSofa3} alt="main sofa" />
                <img className="image" src={ImageSofa4} alt="main sofa" />
            </div>
            <img className="main-image" src={MainImage} alt="main sofa" />
        </div>
    );
}

function ProductInformation() {
    return (
        <div id="product-information">
            <div className="product-title">
                Asgaard sofa
            </div>
            <div className="product-price">
                Rs. 250,000.00
            </div>
            <ProductStat start={4.5} views={5} />
            <div className="product-describe">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </div>
            <ProductOptional />
            <ProductDecided />
            <ProductArticle />
        </div>
    );
}

function ProductStat({ start, views }) {
    const rows = [];
    for (let i = 0; i < 5; i++) {
        if (start >= (i + 1)) {
            rows.push(
                <svg className="product-information-stat-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700" />
                </svg>
            );
        } else {
            if (start > (i)) {
                rows.push(<svg className="product-information-stat-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.1563 7.0125L0.800049 7.9375L5.40005 12.4188L4.31255 18.75L10 15.7625V1.25L7.1563 7.0125Z" fill="#FFC700" />
                </svg>);
            } else {
                rows.push(<svg className="product-information-stat-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFF" />
                </svg>);
            }
        }
    }
    return (
        <div className="product-stat">
            <div className="star">
                {rows}
            </div>
            <div className="product-reivews">
                <div className="product-reviews">
                    {views} Customer Review
                </div>
            </div>
        </div>
    );
}

function ProductOptional({optional}) {
    // for
    return (
        <div className="product-optional">

        </div>
    );
}

function ProductDecided() {
    return (
        <div className="product-decided">

        </div>
    );
}

function ProductArticle() {
    <div className="product-article">

    </div>
}