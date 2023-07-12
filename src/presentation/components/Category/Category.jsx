import React from "react";
import './Category.css';
import { ImageCategoryBed, ImageCategoryDining, ImageCategoryLiving } from "../../constants";

const listProducts = [
    {
        id: 'id1',
        imageSrc: ImageCategoryDining,
        title: 'Dining'
    },
    {
        id: 'id2',
        imageSrc: ImageCategoryLiving,
        title: 'Living'
    },
    {
        id: 'id3',
        imageSrc: ImageCategoryBed,
        title: 'Bedroom'
    }
];

export default class Category extends React.Component {
    render() {
        return (
            <>
                <TitleCategory />
                <ListCategory listProducts={listProducts} />
            </>
        );
    }
}

function TitleCategory() {
    return (
        <>
            <h3 className="category-header">Browse The Range</h3>
            <p className="category-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </>
    )
}

function ListCategory(props) {
    return (
        props.listProducts.length ?
            <ul id="list">
                {props.listProducts.map((product) => (
                    <li className="list-item" key={product.id}>
                        <ItemCategory imageSrc={product.imageSrc} title={product.title} />
                    </li>
                ))}
            </ul>
            : <></>
    )
}

function ItemCategory({ imageSrc, title }) {
    return (
        <>
            <div className="category-item">
                <img className="item-image" src={imageSrc} alt={title} />
                <p className="item-title">{title}</p>
            </div>
        </>
    );
}