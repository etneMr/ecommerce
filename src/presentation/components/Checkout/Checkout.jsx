import React from "react";
import { Navigate } from "react-router-dom";
import './Checkout.css';
import { Header, CommonBanner, Footer, CertificateBanner } from '../common';
import { useForm } from "react-hook-form"
import { apiCart } from "../../services/axios/axoisRepo";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/reducers/cart";

export default function Checkout() {
    const { list, subTotal } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    if (list.length === 0)
        return (
            <Navigate to="/shop" replace={true} />
        );
    if (user === undefined)
        return (
            <Navigate to="/login" replace={true} />
        );
    return (<>
        <Header />
        <CommonBanner pageName="Checkout" />
        <CheckoutBilling userId={user.id} list={list} subTotal={subTotal} />
        <CertificateBanner />
        <Footer />
    </>
    );
}

function CheckoutBilling({ userId, list, subTotal }) {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            companyName: '',
            country: '',
            streetAddress: '',
            town: '',
            province: '',
            zip: '',
            phone: '',
            email: '',
            info: '',
            payment: ''
        }
    })

    const dispath = useDispatch();

    const submitForm = (data) => {
        const submission = {
            firstName: data.firstName,
            lastName: data.lastName,
            companyName: data.companyName,
            country: data.country,
            streetAddress: data.streetAddress,
            town: data.town,
            province: data.province,
            zip: data.zip,
            phone: data.phone,
            email: data.email,
            info: data.info,
            payment: data.payment
        }
        console.log(submission);
        let products = list.map(product => { return { id: product.product.id, quantity: product.quantity } });
        let params = {
            userId: userId,
            products: products
        }
        // transform email string to lowercase to avoid case sensitivity issues in login
        apiCart.checkout(JSON.stringify(params)).then((response) => {
            dispath(clearCart());
        }).catch((err) =>
            console.log(err))
    }


    return (
        <form id="checkout-billing" onSubmit={handleSubmit(submitForm)}>
            <CustomerInformation register={register} />
            <BillingInformation listProducts={list} register={register} subTotal={subTotal} />
        </form>
    );
}

function CustomerInformation({ register }) {
    return (
        <div className="customer-information">
            <div className="title-text">Billing details</div>
            <div className="customer-name">
                <TextField name="firstName" label="First Name" register={register} />
                <TextField name="lastName" label="Last Name" register={register} />
            </div>
            <TextField name="companyName" label="Company Name (Optional)" register={register} />
            <TextField name="country" label="Country / Region" register={register} />
            <TextField name="streetAddress" label="Street address" register={register} />
            <TextField name="town" label="Town / City" register={register} />
            <TextField name="province" label="Province" register={register} />
            <TextField name="zip" label="ZIP code" register={register} />
            <TextField name="phone" label="Phone" register={register} />
            <TextField name="email" label="Email address" register={register} />
            <TextField name="info" placeholder="Additional information" register={register} />
        </div>
    );
}

function BillingInformation({ listProducts, register, subTotal }) {
    const rows = [];
    listProducts.map((product) => rows.push(
        <li key={product.product.id}>
            <div className="product-title-quantity">
                <div className="product-name">{product.product.title}</div> X {product.quantity}
            </div>
            <div className="regular-text">USD {product.product.price}</div>
        </li>
    ));
    return (
        <div className="billing-information">
            <ul style={{ paddingInlineStart: "0px" }}>
                <li>
                    <div className="title-text">Product</div>
                    <div className="title-text">Subtotal</div>
                </li>
                {rows}
                <li>
                    <div className="sub-text">Subtotal</div>
                    <div className="regular-text">USD {subTotal}</div>
                </li>
                <li>
                    <div className="sub-text">Total</div>
                    <div className="total-text">USD {subTotal}</div>
                </li>
            </ul>
            <div className="select-payment">
                <label className="container">
                    <input type="radio" name="payment" value="bank" {...register('payment')} />
                    <span className="checkmark">Direct Bank Transfer</span>
                </label>
                <label className="container">
                    <input type="radio" name="payment" value="credit" {...register('payment')} />
                    <span className="checkmark">Direct Bank Transfer</span>
                </label>
                <label className="container">
                    <input type="radio" name="payment" value="cash" {...register('payment')} />
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


export function TextField({ label, placeholder, initialValue, type, name, register }) {
    return (
        <div className="text-form-field">
            <label className="text-form-label">
                {label}
            </label>
            <input type="text" className="text-field" name={name} placeholder={placeholder} value={initialValue} {...register(name)} />
        </div>
    );
}

export function TextAreaField({ label, placeholder, initialValue, type, name, register }) {
    return (
        <div className="text-form-field">
            <label className="text-form-label">
                {label}
            </label>
            <textarea type="textare" className="text-field" name={name} placeholder={placeholder} value={initialValue} {...register(name)} />
        </div>
    )
}