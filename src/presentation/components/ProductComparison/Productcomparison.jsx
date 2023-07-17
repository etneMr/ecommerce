import React from "react";
import './ProductComparison.css';
import { Header, Footer } from "../common";
import CommonBanner from "../common/CommonBanner/CommonBanner";
import { listShoppingProducts } from "../../constants";
import { ProductStat } from "../ProductComponent/ProductComponent";

export class ProductComparison extends React.Component {
    render() {
        return (
            <>
                <Header />
                <CommonBanner pageName="Comparison" />
                <ProductComparisonTable product1={listShoppingProducts[0]} product2={listShoppingProducts[1]} />
                <Footer />
            </>
        );
    }
}

function ProductComparisonTable({ product1, product2 }) {
    const ref = React.useRef(null);
    function handleDropdownClick() {
        if (ref.current.style.visibility === "visible") {
            ref.current.style.visibility = "hidden";
        } else {
            ref.current.style.visibility = "visible";

        }
    }

    function onSelected({ value }) {
        ref.current.style.visibility = "hidden";
    }

    return (
        <table id="product-comparison">
            <tbody>
                <tr aria-colspan={4} key="product-compare-header">
                    <td>
                        <div className="title-text">
                            Go to Product page for more Products
                        </div>
                        <div className="view-more">
                            View More
                        </div>
                    </td>
                    <AboutProduct product={product1} />
                    <AboutProduct product={product2} />
                    <td>
                        <div className="title-text">
                            Add A Product
                        </div>
                        <div id="choose-product-dropdown">
                            <button onClick={handleDropdownClick} className="dropbtn">
                                Choose a Product
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none">
                                    <path d="M1 1L10 9.5L19 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                            <div className="choose-product-content" ref={ref}>
                                <a href="#" onClick={onSelected}>Link 1</a>
                                <a href="#" onClick={onSelected}>Link 2</a>
                                <a href="#" onClick={onSelected}>Link 3</a>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

function AboutProduct({ product }) {
    return (
        <td>
            <img className="product-image" src={product.imageSrc} alt={product.name} />
            <div className="product-name">
                {product.name}
            </div>
            <div className="product-price">
                Rs. {product.price}
            </div>
            <ProductStat views={product.views} star={product.star} />
        </td>
    );
}