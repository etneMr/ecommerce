import React from "react";
import { Footer, Header, CertificateBanner, CommonBanner } from "../common";
import ShopFilter from "../ShopFilter/ShopFilter";
import { ListProducts } from "../Home/Home";
import { listProducts } from "../../constants";
import './Shop.css';

class Shop extends React.Component {
    render() {
        return (
            <>
                <Header />
                <CommonBanner pageName="Shop" />
                <ShopFilter />
                <ProductsView />
                <CertificateBanner />
                <Footer />
            </>
        );
    }
}

export default Shop;

function ProductsView() {
    return (
        <div style={{ marginTop: "12px", marginBottom: "85px" }}>
            <ListProducts listProducts={listProducts} />
            <PageNavigation length={4} selected={0} />
        </div>
    );
}

function PageNavigation({ length, selected }) {

    const rows = [];
    for (let i = 0; i < length; i++) {
        let margin = (i !== length - 1) ? "38px" : "0px";
        let color = (i !== selected) ? "#F9F1E7" : "#B88E2F";
        rows.push(
            <div className="page-item" style={{ marginRight: margin, background: color }}>
                {(i !== length - 1) ? i + 1 : "Next"}
            </div>
        );
    }
    return (
        <div id="product-page-navigation">
            {rows}
        </div>
    );
}

