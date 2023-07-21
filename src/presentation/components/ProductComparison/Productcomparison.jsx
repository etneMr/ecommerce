import React from "react";
import './ProductComparison.css';
import { listShoppingProducts } from "../../constants";
import { ProductStat } from "../ProductComponent/ProductComponent";
import { Footer, Header, CertificateBanner, CommonBanner } from "../common";

export class ProductComparison extends React.Component {
    render() {
        return (
            <>
                <Header />
                <CommonBanner pageName="Comparison" />
                <ProductComparisonTable product1={listShoppingProducts[0]} product2={listShoppingProducts[1]} />
                <CertificateBanner />
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

    const rows = [];
    rows.push(
        <tr >
            <td style={{ borderBottom: "1px solid #E8e8e8" }}></td>
            <td style={{ borderBottom: "1px solid #E8e8e8" }}></td>
            <td style={{ borderBottom: "1px solid #E8e8e8" }}></td>
            <td style={{ borderBottom: "1px solid #E8e8e8" }}></td>
        </tr>
    )

    for (var i in product1.info) {
        const temp = [];


        for (let j of product1.info[i].value) {
            let sth = product2.info[i].value.find((item) => item.name === j.name);

            temp.push(
                <tr aria-colspan={4}>
                    <td className="content-text" style={{ borderRight: "1px solid #E8E8E8" }}>{j.name}</td>
                    <td className="content-text" style={{ borderRight: "1px solid #E8E8E8" }}>{j.value}</td>
                    <td className="content-text" style={{ borderRight: "1px solid #E8E8E8" }}>{sth.value}</td>
                </tr>
            )
        }

        rows.push(
            <>
                <tr>
                    <td className="title-text" style={{ borderRight: "1px solid #E8E8E8" }}>{product1.info[i].name}</td>
                    <td className="content-text" style={{ borderRight: "1px solid #E8E8E8" }}></td>
                    <td className="content-text" style={{ borderRight: "1px solid #E8E8E8" }}></td>
                </tr>
                {temp}
            </>

        )
    }

    return (
        <table id="product-comparison">
            <tbody>
                <tr aria-colspan={4} key="product-compare-header" >
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
                {rows}
                <tr>
                    <td style={{ borderRight: "1px solid #E8E8E8" }}></td>
                    <td style={{ borderRight: "1px solid #E8E8E8" }}>
                        <div className="add-button">Add To Cart</div>
                    </td>
                    <td style={{ borderRight: "1px solid #E8E8E8" }}>
                        <div className="add-button">Add To Cart</div>
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
                USD {product.price}
            </div>
            <ProductStat views={product.views} star={product.star} />
        </td>
    );
}