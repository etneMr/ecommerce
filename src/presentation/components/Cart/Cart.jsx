import React from "react";
import { listShoppingProducts } from "../../constants";
import { Footer, Header, CertificateBanner, CommonBanner } from "../common";
import './Cart.css';

export default class Cart extends React.Component {
    render() {
        return (
            <>
                <Header />
                <CommonBanner pageName="Cart" />
                <CartComponent />
                <CertificateBanner />
                <Footer />
            </>
        );
    }
}

function CartComponent() {
    return (
        <div id="cart-component">
            <CartProductTable listProducts={listShoppingProducts} />
            <CartTotals subtotal="Rs. 2.500.000" total="Rs. 2.500.000" />
        </div>
    );
}

function CartProductTable({ listProducts }) {
    const rows = [];
    for (let product of listProducts) {
        rows.push(
            <tr aria-colspan={5} key={product.id}>
                <ProductComponentRow product={product} />
            </tr>
        );
    }
    return (
        <table className="cart-product-table">
            <tbody>
                <tr aria-colspan={5} key="id0-header">
                    <th className="header">Product</th>
                    <th className="header">Price</th>
                    <th className="header">Quantity</th>
                    <th className="header">Subtotal</th>
                    <th className="header"></th>
                </tr>
                {rows}
            </tbody>
        </table>
    );
}

function ProductComponentRow({ product }) {
    return (
        <>
            <td className="product-image-name">
                <img className="product-image" src={product.imageSrc} alt={product.name} />
                <div className="product-text">
                    {product.name}
                </div>
            </td>
            <td>
                <div className="product-text">
                    Rs. {product.price}
                </div>
            </td>
            <td>
                <div className="product-quantity">
                    {product.quantity}

                </div>
            </td>
            <td>
                <div className="product-subtotal">
                    Rs. {product.subtotal}
                </div>
            </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="#B88E2F">
                    <path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="#B88E2F" />
                </svg>
            </td>
        </>
    );
}

function CartTotals({ subtotal, total }) {
    return (
        <div className="cart-totals">
            <div className="cart-totals-title">
                Cart Totals
            </div>
            <div className="cart-totals-detail">
                <div className="cart-text">
                    Subtotal
                </div>
                <div className="subtotal-text">
                    {subtotal}
                </div>
            </div>
            <div className="cart-totals-detail">
                <div className="cart-text">Total</div>
                <div className="total-text">
                    {total}
                </div>
            </div>
            <div className="cart-checkout">
                Check Out
            </div>
        </div>
    );
}