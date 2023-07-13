import React from "react";
import { Footer, Header } from "../common";
import ShopBanner from "../ShopBanner/ShopBanner";
import ShopFilter from "../ShopFilter/ShopFilter";

class Shop extends React.Component {
    render() {
        return (
            <>
                <Header />
                <ShopBanner />
                <ShopFilter />
                <h1>Welcome Shop</h1>
                <Footer />
            </>
        );
    }
}

export default Shop;