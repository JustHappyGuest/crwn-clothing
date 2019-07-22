import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

const CustomButton = ({children, ...rest}) => (
    <button className="custom-button" {...rest}>{children}</button>
);

CustomButton.defaultProps = {
    children: "",
    type: "button"
}

CustomButton.propTypes = {
    children: PropTypes.string,
    type: PropTypes.string
}

export default CustomButton;