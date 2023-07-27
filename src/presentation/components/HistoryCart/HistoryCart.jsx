import React from "react";
import './HistoryCart.css';
import { Footer, Header, CommonBanner, CertificateBanner } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { apiCart } from "../../services/axios/axoisRepo";
import { updateListhistoryCart } from "../../redux/reducers/historyCart";
import { useState } from "react";
import { PageNavigation } from "../Shop/Shop";

export default function HistoryCart() {
    return (
        <>
            <Header />
            <CommonBanner pageName="History Order" />
            <HistoryCartComponent />
            <CertificateBanner />
            <Footer />
        </>
    );
}

function HistoryCartComponent() {
    const dispatch = useDispatch()
    const { list, limit, total, skip } = useSelector((state) => state.historyCart)

    const [searchText, setSearchText] = useState();

    React.useEffect(() => {
        const params = {
            params: {
                limit: limit,
            }
        }
        apiCart.getAllCart(params).then((response) => {
            dispatch(updateListhistoryCart(response.data));
        }).catch(error => {
            // setError(error);
            console.log(error);
        });
    }, [limit, dispatch]);

    function onPageClick(page) {
        const params = {
            params: {
                limit: limit,
                skip: page * limit,
            }
        }
        apiCart.getAllCart(params, searchText).then((response) => {
            dispatch(updateListhistoryCart(response.data));
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div id="history-cart">
            <div className="history-cart-header">
                Order History
            </div>
            <div className="history-cart-sub-header">
                Here you can manage your order
            </div>
            <div className="history-cart-search">
                <svg className="prefix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input type="text" placeholder="Search for Order ID" />
            </div>
            <HistoryCartTable listCart={list} />
            <div style={{ marginBottom: "54px" }}>
                <PageNavigation length={Math.ceil(total / limit)} selected={(skip / limit)} callback={onPageClick} />
            </div>
        </div>
    )
}

function HistoryCartTable({ listCart }) {
    const rows = [];
    listCart.map((cart) =>
        rows.push(
            <tr>
                <td>{cart.id}</td>
                <td>26/07/2023</td>
                <td>{cart.totalProducts}</td>
                <td>{cart.total}</td>
                <td>Shipped</td>
                <td>Cancel</td>
            </tr>
        )
    )

    return (
        <table>
            <tbody>
                <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th>Total amount</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                {rows}
            </tbody>
        </table>
    )
}
