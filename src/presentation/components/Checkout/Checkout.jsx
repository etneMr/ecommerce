import React from "react";
import './Checkout.css';
import { Header, CommonBanner, Footer, CertificateBanner } from '../common';
import { Form } from "react-router-dom";
import { listShoppingProducts } from "../../constants";

export default class Checkout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <CommonBanner pageName="Checkout" />
                <CheckoutBilling />
                <CertificateBanner />
                <Footer />
            </>
        );
    }
}

function CheckoutBilling() {
    return (
        <Form id="checkout-billing">
            <CustomerInformation />
            <BillingInformation listProducts={listShoppingProducts} />
        </Form>
    );
}

function CustomerInformation() {
    return (
        <div className="customer-information">
            <div className="title-text">Billing details</div>
            <div className="customer-name">
                <TextField name="first-name" label="First Name" />
                <TextField name="last-name" label="Last Name" />
            </div>
            <TextField name="companyName" label="Company Name (Optional)" />
            <TextField name="companyName" label="Country / Region" />
            <TextField name="companyName" label="Street address" />
            <TextField name="companyName" label="Town / City" />
            <TextField name="companyName" label="Province" />
            <TextField name="companyName" label="ZIP code" />
            <TextField name="companyName" label="Phone" />
            <TextField name="companyName" label="Email address" />
            <TextField name="companyName" placeholder="Additional information" />
        </div>
    );
}

function BillingInformation({ listProducts }) {
    const rows = [];
    listProducts.map((product) => rows.push(
        <li key={product.id}>
            <div>
                <div className="product-name">{product.name}</div> x {product.quantity}
            </div>
            <div className="regular-text">USD {product.price}</div>
        </li>
    ));
    return (
        <div className="billing-information">
            <ul style={{paddingInlineStart: "0px"}}>
                <li>
                    <div className="title-text">Product</div>
                    <div className="title-text">Subtotal</div>
                </li>
                {rows}
                <li>
                    <div className="sub-text">Subtotal</div>
                    <div className="regular-text">USD 250,000.00</div>
                </li>
                <li>
                    <div className="sub-text">Total</div>
                    <div className="total-text">USD 250,000.00</div>
                </li>
            </ul>
            <div className="select-payment">
                <label className="container">
                    <input type="radio" name="payment" />
                    <span className="checkmark">Direct Bank Transfer</span>
                </label>
                <label className="container">
                    <input type="radio" name="payment" />
                    <span className="checkmark">Direct Bank Transfer</span>
                </label>
                <label className="container">
                    <input type="radio" name="payment" />
                    <span className="checkmark">Cash On Delivery</span>
                </label>
                <div className="payment-note">
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy.</strong>
                </div>
            </div>
            <input type="submit" value="Place order" className="submit-button" />
        </div>
    );
}


export function TextField({ label, placeholder, initialValue, type, name }) {
    return (
        <div className="text-form-field">
            <label className="text-form-label">
                {label}
            </label>
            <input type="text" className="text-field" name={name} placeholder={placeholder} value={initialValue} />
        </div>
    );
}

export function TextAreaField({ label, placeholder, initialValue, type, name}){
    return(
        <div className="text-form-field">
            <label className="text-form-label">
                {label}
            </label>
            <textarea type="textare" className="text-field" name={name} placeholder={placeholder} value={initialValue} />
        </div>
    )
}