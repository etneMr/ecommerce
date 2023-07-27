import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import { EToken } from "../../../constants";
import { useSelector, useDispatch } from "react-redux";
import { ImageLogo } from '../../../constants';
import { apiProduct } from "../../../services/axios/axoisRepo";
import { updateCart, removeFromCart } from "../../../redux/reducers/cart";
import { logout } from "../../../redux/reducers/user";
import { useNavigate } from "react-router-dom";

export function Header() {
    const ref = React.useRef(null);
    const refBackground = React.useRef(null)
    const navigate = useNavigate();

    function handleShoppingCart() {
        ref.current.style.visibility = "visible";
        refBackground.current.style.visibility = "visible";
    }

    function callbackClose() {
        ref.current.style.visibility = "hidden";
        refBackground.current.style.visibility = "hidden";
    }

    function callbackRemoveCart(productId) {
        dispath(removeFromCart(productId));
    }

    function authCallback(user) {
        if (user) {
            dispath(logout());
            navigate("/login");
        } else {
            console.log("User not logged")
            navigate("/login");
        }
    }

    const { list } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const dispath = useDispatch();
    React.useEffect(() => {
        const fetchData = async () => {
            let listProd = [];
            const listCart = JSON.parse(localStorage.getItem(EToken.xlistCard)) || [];
            // console.log(listCart);
            await listCart.map((item) =>
                apiProduct.getOneProduct(item.productId).then((response) => {
                    listProd = [...listProd, { quantity: item.quantity, product: response.data }]
                    dispath(updateCart({ listProd, listCart }))
                }
                ).catch((error) => {
                    console.log(error);
                })
            )
            // console.log(listProd);
            return listProd
        }

        fetchData().then((value) => {
            // console.log(value);
            // dispath(updateCart(value))
        }
        );

    }, [dispath]);


    return (
        <>
            <div id="header" ref={ref}>
                <Link to="/" id="logo">
                    <img src={ImageLogo} alt="logo" className="image" />
                    <div className="name">Furniro</div>
                </Link>

                <div id="header-right">
                    <div key="home">
                        <Link className="item" to="/">Home</Link>
                    </div>
                    <div key="shop">
                        <Link className="item" to="/shop">Shop</Link>
                    </div>
                    <div key="cart">
                        <Link className="item" to="/cart">Cart</Link>
                    </div>
                    <div key="contact">
                        <Link className="item" to="/contact" style={{ paddingRight: 0 }}>Contact</Link>

                    </div>
                </div>

                <div id="header-icon">
                    <div className="icon" onClick={() => authCallback(user)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M23.3333 14V8.16669H25.6666V15.1667H23.3333M23.3333 19.8334H25.6666V17.5H23.3333M11.6666 15.1667C14.7816 15.1667 21 16.73 21 19.8334V23.3334H2.33331V19.8334C2.33331 16.73 8.55165 15.1667 11.6666 15.1667ZM11.6666 4.66669C12.9043 4.66669 14.0913 5.15835 14.9665 6.03352C15.8416 6.90869 16.3333 8.09568 16.3333 9.33335C16.3333 10.571 15.8416 11.758 14.9665 12.6332C14.0913 13.5084 12.9043 14 11.6666 14C10.429 14 9.24198 13.5084 8.36682 12.6332C7.49164 11.758 6.99998 10.571 6.99998 9.33335C6.99998 8.09568 7.49164 6.90869 8.36682 6.03352C9.24198 5.15835 10.429 4.66669 11.6666 4.66669ZM11.6666 17.3834C8.20165 17.3834 4.54998 19.0867 4.54998 19.8334V21.1167H18.7833V19.8334C18.7833 19.0867 15.1316 17.3834 11.6666 17.3834ZM11.6666 6.88335C11.0169 6.88335 10.3937 7.14148 9.93424 7.60094C9.47477 8.06041 9.21665 8.68357 9.21665 9.33335C9.21665 9.98313 9.47477 10.6063 9.93424 11.0658C10.3937 11.5252 11.0169 11.7834 11.6666 11.7834C12.3164 11.7834 12.9396 11.5252 13.3991 11.0658C13.8585 10.6063 14.1166 9.98313 14.1166 9.33335C14.1166 8.68357 13.8585 8.06041 13.3991 7.60094C12.9396 7.14148 12.3164 6.88335 11.6666 6.88335Z" fill="black" />
                        </svg>
                    </div>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M24.5 24.5L19.2663 19.257M22.1666 12.25C22.1666 14.88 21.1219 17.4024 19.2621 19.2621C17.4024 21.1219 14.88 22.1666 12.25 22.1666C9.61992 22.1666 7.09757 21.1219 5.23784 19.2621C3.3781 17.4024 2.33331 14.88 2.33331 12.25C2.33331 9.61992 3.3781 7.09757 5.23784 5.23784C7.09757 3.3781 9.61992 2.33331 12.25 2.33331C14.88 2.33331 17.4024 3.3781 19.2621 5.23784C21.1219 7.09757 22.1666 9.61992 22.1666 12.25V12.25Z" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M8.16668 3.5C4.94551 3.5 2.33334 6.08533 2.33334 9.275C2.33334 11.8498 3.35418 17.9608 13.4027 24.1383C13.5827 24.2479 13.7893 24.3058 14 24.3058C14.2107 24.3058 14.4173 24.2479 14.5973 24.1383C24.6458 17.9608 25.6667 11.8498 25.6667 9.275C25.6667 6.08533 23.0545 3.5 19.8333 3.5C16.6122 3.5 14 7 14 7C14 7 11.3878 3.5 8.16668 3.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="icon" style={{ paddingRight: 0 }} onClick={handleShoppingCart} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M25.2355 19.1926H8.95234L9.76991 17.5273L23.3543 17.5027C23.8137 17.5027 24.2074 17.1746 24.2894 16.7207L26.1707 6.19062C26.2199 5.91445 26.1461 5.63008 25.9656 5.41406C25.8764 5.30775 25.7652 5.22211 25.6396 5.16309C25.514 5.10407 25.377 5.07308 25.2383 5.07227L7.95702 5.01484L7.80937 4.32031C7.7164 3.87734 7.31718 3.55469 6.86328 3.55469H2.63867C2.38267 3.55469 2.13716 3.65638 1.95614 3.8374C1.77513 4.01841 1.67343 4.26393 1.67343 4.51992C1.67343 4.77592 1.77513 5.02143 1.95614 5.20245C2.13716 5.38346 2.38267 5.48516 2.63867 5.48516H6.08124L6.72656 8.55312L8.31523 16.2449L6.26992 19.5836C6.1637 19.727 6.09972 19.8972 6.08523 20.075C6.07073 20.2528 6.10629 20.4312 6.18788 20.5898C6.35195 20.9152 6.68281 21.1203 7.04921 21.1203H8.7664C8.40032 21.6065 8.20258 22.1988 8.20312 22.8074C8.20312 24.3551 9.46093 25.6129 11.0086 25.6129C12.5562 25.6129 13.8141 24.3551 13.8141 22.8074C13.8141 22.1977 13.6117 21.6043 13.2508 21.1203H17.6559C17.2898 21.6065 17.092 22.1988 17.0926 22.8074C17.0926 24.3551 18.3504 25.6129 19.898 25.6129C21.4457 25.6129 22.7035 24.3551 22.7035 22.8074C22.7035 22.1977 22.5012 21.6043 22.1402 21.1203H25.2383C25.7687 21.1203 26.2035 20.6883 26.2035 20.1551C26.2019 19.8994 26.0993 19.6546 25.9179 19.4743C25.7366 19.294 25.4913 19.1927 25.2355 19.1926ZM8.35898 6.91797L24.1035 6.96992L22.5613 15.6051L10.1937 15.627L8.35898 6.91797ZM11.0086 23.6715C10.5328 23.6715 10.1445 23.2832 10.1445 22.8074C10.1445 22.3316 10.5328 21.9434 11.0086 21.9434C11.4844 21.9434 11.8726 22.3316 11.8726 22.8074C11.8726 23.0366 11.7816 23.2564 11.6196 23.4184C11.4575 23.5805 11.2378 23.6715 11.0086 23.6715ZM19.898 23.6715C19.4223 23.6715 19.034 23.2832 19.034 22.8074C19.034 22.3316 19.4223 21.9434 19.898 21.9434C20.3738 21.9434 20.7621 22.3316 20.7621 22.8074C20.7621 23.0366 20.6711 23.2564 20.509 23.4184C20.347 23.5805 20.1272 23.6715 19.898 23.6715Z" fill="black" />
                            <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="root-background" ref={refBackground} onClick={() => callbackClose()}></div>
            <div id="shopping-cart" ref={ref}>
                <ShoppingCart listProducts={list} callBack={callbackClose} remove={callbackRemoveCart} />
            </div>
        </>
    );
}

function ShoppingCart({ listProducts, callBack, remove }) {
    const rows = [];
    let subTotal = 0;

    if ((!listProducts) || (listProducts.length === 0))
        rows.push(
            <li key="Empty-cart">
                <div>
                    Empty Shopping Cart
                </div>
            </li>
        );
    else
        listProducts.map((item) => {
            subTotal += item.quantity * item.product.price;
            return rows.push(
                <li key={item.product.id}>
                    <div>
                        <ProductShoppingCart product={item.product} quantity={item.quantity} />
                    </div>
                    <div className="shopping-cart-icon" onClick={() => remove(item.product.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#9F9F9F">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z" fill="#9F9F9F" />
                        </svg>
                    </div>
                </li>
            )
        })

    return (
        <div id="shopping-cart-component">
            <div className="shopping-cart-top">
                <ul>
                    <li>
                        <div className="shopping-cart-header" >
                            Shopping Cart
                        </div>
                        <div className="shopping-cart-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none" onClick={callBack}>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.11047 9.6734C6.16563 9.6181 6.23115 9.57424 6.30328 9.5443C6.37542 9.51437 6.45275 9.49896 6.53085 9.49896C6.60894 9.49896 6.68628 9.51437 6.75841 9.5443C6.83055 9.57424 6.89607 9.6181 6.95122 9.6734L8.3121 11.0355L9.67297 9.6734C9.78446 9.56191 9.93568 9.49927 10.0933 9.49927C10.251 9.49927 10.4022 9.56191 10.5137 9.6734C10.6252 9.78489 10.6878 9.9361 10.6878 10.0938C10.6878 10.2514 10.6252 10.4027 10.5137 10.5141L9.15166 11.875L10.5137 13.2359C10.6252 13.3474 10.6878 13.4986 10.6878 13.6563C10.6878 13.8139 10.6252 13.9652 10.5137 14.0766C10.4022 14.1881 10.251 14.2508 10.0933 14.2508C9.93568 14.2508 9.78446 14.1881 9.67297 14.0766L8.3121 12.7146L6.95122 14.0766C6.83973 14.1881 6.68852 14.2508 6.53085 14.2508C6.37318 14.2508 6.22196 14.1881 6.11047 14.0766C5.99898 13.9652 5.93635 13.8139 5.93635 13.6563C5.93635 13.4986 5.99898 13.3474 6.11047 13.2359L7.47253 11.875L6.11047 10.5141C6.05518 10.459 6.01131 10.3935 5.98137 10.3213C5.95144 10.2492 5.93604 10.1719 5.93604 10.0938C5.93604 10.0157 5.95144 9.93834 5.98137 9.86621C6.01131 9.79407 6.05518 9.72855 6.11047 9.6734Z" fill="#9F9F9F" />
                                <path d="M8.3125 1.1875C9.09986 1.1875 9.85497 1.50028 10.4117 2.05703C10.9685 2.61378 11.2812 3.36889 11.2812 4.15625V4.75H5.34375V4.15625C5.34375 3.36889 5.65653 2.61378 6.21328 2.05703C6.77003 1.50028 7.52514 1.1875 8.3125 1.1875ZM12.4688 4.75V4.15625C12.4688 3.05394 12.0309 1.99679 11.2514 1.21734C10.472 0.437889 9.41481 0 8.3125 0C7.21019 0 6.15304 0.437889 5.37359 1.21734C4.59414 1.99679 4.15625 3.05394 4.15625 4.15625V4.75H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H14.25C14.8799 19 15.484 18.7498 15.9294 18.3044C16.3748 17.859 16.625 17.2549 16.625 16.625V4.75H12.4688ZM1.1875 5.9375H15.4375V16.625C15.4375 16.9399 15.3124 17.242 15.0897 17.4647C14.867 17.6874 14.5649 17.8125 14.25 17.8125H2.375C2.06006 17.8125 1.75801 17.6874 1.53531 17.4647C1.31261 17.242 1.1875 16.9399 1.1875 16.625V5.9375Z" fill="#9F9F9F" />
                            </svg>
                        </div>
                    </li>
                    <div className="shopping-cart-devider"></div>
                    <div className="list-shopping-product">
                        {rows}
                    </div>
                </ul>
            </div>
            <div className="shopping-cart-bottom">
                <div className="sub-total">
                    <div className="sub-total-text">
                        Subtotal
                    </div>
                    <div className="sub-total-price">
                        USD {subTotal}
                    </div>
                </div>
                <div className="shopping-cart-button-component">
                    <div className="shopping-cart-button">Cart</div>
                    <div className="shopping-cart-button">Checkout</div>
                    <div className="shopping-cart-button">Comparison</div>
                </div>
            </div>
        </div>
    );
}

function ProductShoppingCart({ product, quantity }) {
    return (
        <div className="product-shopping-cart" key={product.id}>
            <div className="product-shopping-cart-image">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-shopping-cart-detail">
                <div className="product-shopping-cart-name">
                    {product.title}
                </div>
                <div className="product-shopping-cart-info">
                    <div className="product-shopping-cart-quantity">
                        {quantity}
                    </div>
                    <div className="product-shopping-cart-quantity">
                        X
                    </div>
                    <div className="product-shopping-cart-price">
                        USD {product.price}
                    </div>
                </div>

            </div>
        </div>
    );
}