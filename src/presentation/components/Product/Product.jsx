import React from "react";
import './Product.css';
import { Header, Footer } from '../common';
import ProductComponent from "../ProductComponent/ProductComponent";
import { ImageCloundSofa1, ImageCloundSofa2 } from "../../constants";
import { listRelatedProducts } from '../../constants';
import { ListProducts } from "../Home/Home";


export default class Product extends React.Component {
    render() {
        return (
            <>
                <Header />
                <ProductRef name="Asgaard sofa" />
                <ProductComponent />
                <ProductInfoComponent />
                <RelatedProduct />
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

function ProductInfoComponent() {
    return (
        <div id="product-info">
            <div className="product-info-header">
                <div className="product-info-header-button">
                    Description
                </div>
                <div className="product-info-header-button">
                    Additional Information
                </div>
                <div className="product-info-header-button">
                    Reviews [5]
                </div>
            </div>
            <div className="product-info-params">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </div>
            <div className="product-info-params">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </div>
            <div className="product-info-images">
                <img className="image" src={ImageCloundSofa1} alt="Clound Sofa 1" />
                <img className="image" src={ImageCloundSofa2} alt="Clound Sofa 2" />
            </div>
        </div>
    );
}


function RelatedProduct() {
    return (
        <div id="product-related">
            <div className="product-related-header">Related Products</div>
            <ListProducts listProducts={listRelatedProducts} />
            <div id="product-showMore-comp">
                <button className="product-showMore">
                    <div className="showMore-text">Show More</div>
                </button>
            </div>
        </div>
    )
}
