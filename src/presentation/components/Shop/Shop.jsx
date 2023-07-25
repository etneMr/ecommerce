import React from "react";
import { Footer, Header, CertificateBanner, CommonBanner } from "../common";
import ShopFilter from "../ShopFilter/ShopFilter";
import { ListProducts } from "../Home/Home";
import { apiProduct } from "../../services/axios/axoisRepo";
import './Shop.css';
import { useSelector, useDispatch } from "react-redux";
import { updateListProduct } from "../../redux/reducers/shopFilter";

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
    const [error, setError] = React.useState(null);

    const { limit, list, total, skip } = useSelector((state) => state.shopFilter);
    const dispatch = useDispatch()

    React.useEffect(() => {
        const params = {
            params: {
                limit: limit,
            }
        }
        apiProduct.getAllProduct(params).then((response) => {
            dispatch(updateListProduct(response.data));
        }).catch(error => {
            setError(error);
        });
    }, [limit, dispatch]);

    function onPageClick(page) {
        const params = {
            params: {
                limit: limit,
                skip: page * limit,
            }
        }
        apiProduct.getAllProduct(params).then((response) => {
            dispatch(updateListProduct(response.data));
        }).catch(error => {
            setError(error);
        });
    }

    if (error) return `Error: ${error.message}`;
    if (!list) return "No post!"


    return (
        <div style={{ marginTop: "12px", marginBottom: "85px" }}>
            <ListProducts listProducts={list} />
            <PageNavigation length={Math.ceil(total / limit + 1)} selected={(skip / limit)} callback={onPageClick} />
        </div>
    );
}

export function PageNavigation({ length, selected, callback }) {
    const rows = [];
    if (selected !== 0) {
        rows.push(
            <div className="page-item" style={{ marginRight: "38px", background: "F9F1E7" }} key={-1} onClick={() => callback(selected - 1)}>
                Prev
            </div>
        );
    }
    for (let i = 0; i < length; i++) {
        let margin = (i !== length - 1) ? "38px" : "0px";
        let color = (i !== selected) ? "#F9F1E7" : "#B88E2F";
        if ((selected === (length - 2)) && ((i) === (length - 1))) {
        } else {
            rows.push(
                <div className="page-item" style={{ marginRight: margin, background: color }} key={i} onClick={() => callback((i !== length - 1) ? i : selected + 1)}>
                    {(i !== length - 1) ? i + 1 : "Next"}
                </div>
            );
        }

    }
    return (
        <div id="product-page-navigation">
            {rows}
        </div>
    );
}

