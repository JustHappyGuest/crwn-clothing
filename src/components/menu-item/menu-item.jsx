import React from 'react';
import PropTypes from "prop-types";
import "./style.scss";
import {withRouter} from "react-router-dom";

const MenuItem = ({title, subtitle, imageUrl, size, linkUrl, history, match}) => (
    <div className={(size === "large") ? 'menu-item large' : 'menu-item'} onClick={() => history.push(match.url + linkUrl)}>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">{subtitle}</span>
        </div>
    </div>
);

MenuItem.defaultProps = {
    subtitle: "SHOP NOW"
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    imageUrl: PropTypes.string.isRequired
}

export default withRouter(MenuItem);