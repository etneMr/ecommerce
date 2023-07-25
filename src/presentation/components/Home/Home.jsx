import React from "react";
import { Footer } from "../common";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import { Link } from "react-router-dom";
import {
    ImageProduct1,
    ImageProduct2,
    ImageProduct3,
    ImageProduct4,
    ImageProduct5,
    ImageProduct6,
    ImageProduct7,
    ImageProduct8
} from "../../constants";
import ProductCard from "../ProductCard/ProductCard";
import { apiProduct } from "../../services/axios/axoisRepo";
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <>
                <Banner />
                <Category />
                <OurProduct />
                <Footer />
            </>
        );
    }
}

export default Home;

function OurProduct() {
    const [products, setProducts] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        // invalid url will trigger an 404 error
        apiProduct.getAllProduct().then((response) => {
            setProducts(response.data.products)
        }).catch(error => {
            setError(error);
        });
    }, []);

    if (error) return `Error: ${error.message}`;
    if (!products) return "No post!"

    return (
        <>
            <div className="product-header">Our Products</div>
            <ListProducts listProducts={products} />
            <div id="product-showMore-comp">
                <Link to={`/shop`} className="product-showMore">
                    <div className="showMore-text">Show More</div>
                </Link>
            </div>
        </>
    )
}

export function ListProducts(props) {
    return (
        <>
            {props.listProducts.length ?
                <ul className="product-list">
                    {props.listProducts.map((product) =>
                        <li className="product-item" key={product.id}>
                            <ProductCard product={product} id={product.id} />
                        </li>
                    )}
                </ul> : <></>}
        </>
    )
}