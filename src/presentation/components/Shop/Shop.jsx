import React from "react";
import { Footer, Header } from "../common";
import ShopBanner from "../ShopBanner/ShopBanner";

class Shop extends React.Component {
    render() {
        return (
            <>
                <Header />
                <ShopBanner />
                <h1>Welcome Shop</h1>
                <Footer />
            </>
        );
    }
}

export default Shop;