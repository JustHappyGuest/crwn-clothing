import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";
import CollectionItem from "../collection-item";


const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((item, idx)=>(idx < 4))
                    .map(({id, ...rest}) => <CollectionItem key={id} {...rest} />)
            }
        </div>
    </div>
);

CollectionPreview.defaultProps = {
    items: []
}

CollectionPreview.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array
}

export default CollectionPreview;