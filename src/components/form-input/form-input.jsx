import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

const FormInput = ({handleChange, label, ...rest}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...rest} />
        {
            label
                ? <label className={`${rest.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                : null
        }
    </div>
);

FormInput.defaultProps = {
    type: 'text',
    required: false,
    value: ""
}

FormInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool
}

export default FormInput;