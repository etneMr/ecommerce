import React from "react";
import './Product.css';
import { Header, Footer } from '../common';
import ProductComponent from "../ProductComponent/ProductComponent";
import { ImageCloundSofa1, ImageCloundSofa2 } from "../../constants";
import { listRelatedProducts } from '../../constants';
import { ListProducts } from "../Home/Home";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { apiProduct } from "../../services/axios/axoisRepo";
import { updateProduct } from "../../redux/reducers/product";
import { updateListProduct } from "../../redux/reducers/shopFilter";

export default function Product() {
    const params = useParams();
    const [error, setError] = React.useState(null);
    let productId = params.productId;

    const product = useSelector((state) => state.product.product);
    const dispatch = useDispatch();

    React.useEffect(() => {
        apiProduct.getOneProduct(productId).then((response) => {
            dispatch(updateProduct(response.data));
        }).catch(error => {
            setError(error);
        });
    }, [productId, dispatch]);

    if (!product) return "Loading"

    return (
        <>
            <Header />
            <ProductRef name={product.title} />
            <ProductComponent product={product} />
            <ProductInfoComponent product={product} />
            <RelatedProduct />
            <Footer />
        </>
    );

}

function ProductRef({ name }) {
    return (
        <div id="product-ref">
            <div className="product-ref-text">
                <div className="text">Home</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                </svg>
            </div>
            <div className="product-ref-text">
                <div className="text">Shop</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                </svg>
            </div>
            <div className="product-ref-name">
                {name}
            </div>

        </div>
    );
}

function ProductInfoComponent(product) {
    return (
        <div id="product-info">
            <div className="product-info-header">
                <div className="product-info-header-button">
                    Description
                </div>
                <div className="product-info-header-button">
                    Additional Information
                </div>
                <div className="product-info-header-button">
                    Reviews [5]
                </div>
            </div>
            <div className="product-info-params">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </div>
            <div className="product-info-params">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </div>
            <div className="product-info-images">
                <img className="image" src={ImageCloundSofa1} alt="Clound Sofa 1" />
                <img className="image" src={ImageCloundSofa2} alt="Clound Sofa 2" />
            </div>
        </div>
    );
}


function RelatedProduct() {
    const [error, setError] = React.useState(null);

    const { list } = useSelector((state) => state.shopFilter);
    const dispatch = useDispatch()

    React.useEffect(() => {
        const params = {
            params: {
                limit: 4,
            }
        }
        apiProduct.getAllProduct(params).then((response) => {
            dispatch(updateListProduct(response.data));
        }).catch(error => {
            setError(error);
        });
    }, [dispatch]);

    if (error) return `Error: ${error.message}`;
    if (!list) return "No post!"

    return (
        <div id="product-related">
            <div className="product-related-header">Related Products</div>
            <ListProducts listProducts={list} />
            <div id="product-showMore-comp">
                <button className="product-showMore">
                    <div className="showMore-text">Show More</div>
                </button>
            </div>
        </div>
    )
}
