import React from "react";
import { Footer } from "../common";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import {
    ImageProduct1,
    ImageProduct2,
    ImageProduct3,
    ImageProduct4,
    ImageProduct5,
    ImageProduct6,
    ImageProduct7,
    ImageProduct8,
    ImageProduct9
} from "../../constants";
import ProductCard from "../ProductCard/ProductCard";
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <>
                <Banner />
                <Category />
                <OurProduct/>
                <Footer />
            </>
        );
    }
}

export default Home;


function OurProduct() {
    return (
        <>
            <div className="product-header">Our Products</div>
            <ListProducts listProducts={listProducts} />
        </>
    )
}

function ListProducts(props) {
    return (
        props.listProducts.length ?
            <ul className="product-list">
                {props.listProducts.map((product) =>
                    <li className="product-item" key={product.id}>
                        <ProductCard product= {product} id = {product.id}/>
                    </li>
                )}
            </ul> : <></>
    )
}


const listProducts = [
    {
        name: "Syltherine",
        describe: "Stylish cafe chair",
        price: 2500000,
        basePrice: 3500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.3,
        },
        imageSrc: ImageProduct1,
        id: "product-1",
    },
    {
        name: "Leviosa",
        describe: "Stylish cafe chair",
        price: 2500000,
        basePrice: 2500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: undefined,
        },
        imageSrc: ImageProduct2,
        id: "product-2",
    }, {
        name: "Lolito",
        describe: "Luxury big sofa",
        price: 7000000,
        basePrice: 14000000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.5,
        },
        imageSrc: ImageProduct3,
        id: "product-3",
    }, {
        name: "Respira",
        describe: "Outdoor bar table and stool",
        price: 500000,
        basePrice: 500000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct4,
        id: "product-4",
    }, {
        name: "Grifo",
        describe: "Night lamp",
        price: 1500000,
        basePrice: 1500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: undefined,
        },
        imageSrc: ImageProduct5,
        id: "product-5",
    }, {
        name: "Muggo",
        describe: "Small mug",
        price: 150000,
        basePrice: 150000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct6,
        id: "product-6",
    }, {
        name: "Pingky",
        describe: "Cute bed set",
        price: 7000000,
        basePrice: 14000000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.5,
        },
        imageSrc: ImageProduct7,
        id: "product-7",
    }, {
        name: "Potty",
        describe: "Minimalist flower pot",
        price: 500000,
        basePrice: 500000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct8,
        id: "product-8",
    },
];