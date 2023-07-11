import React from "react";
import PropTypes from "prop-types";
import './ProductCard.css'

class ProductCard extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>
                    <ProductHover />
                    <ProductImage imageSrc={this.props.product.imageSrc} name={this.props.product.name} status={this.props.product.status.isNew ? "New" : this.props.product.status.discount} />
                    <ProductDetail name={this.props.product.name} description={this.props.product.describe}
                        price={this.props.product.price} basePrice={this.props.product.basePrice} currency={this.props.product.currency}
                    />
                </div>
            </>
        );
    }


}

ProductCard.propsTypes = {
    product: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
};

export default ProductCard;

function ProductImage({ imageSrc, name, status }) {
    return (
        <>
            <div style={{
                width: "285px",
                height: "301px",
                position: "relative"
            }}>
                {(status !== undefined) && <div className="product-status" style={{ backgroundColor: (status === "New") && "#2EC1AC" }}>
                    <div className="product-text-status">{(status === "New") ? status : ("-" + status * 100 + "%")}</div>
                </div>}
                <img className="product-image" src={imageSrc} alt={name} />
            </div>
        </>
    );
}

function ProductDetail({ name, description, price, basePrice, currency }) {
    return (
        <>
            <div className="product-detail">
                <div className="product-name">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-price">{currency} {price} {(basePrice !== price) && <span className="product-base-price">{currency} {basePrice}</span>}</div>
            </div>
        </>
    );
}

function ProductHover() {
    return (
        <>
            <div className="product-hover">
                as
            </div>
        </>
    );
}