import React from 'react';
import PropTypes from "prop-types";
import "./style.scss";



const CollectionItem = ({ name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}$</span>
        </div>
    </div>
);

CollectionItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
}

export default CollectionItem;