import React from 'react';

import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children }) => {
  console.log("value", value)
  const handleChange = () => {
    onChange({name: name, value: !value})
  }
    return (
    <div className="mb-3 form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={name}
        name={name}
        onChange={handleChange}
        checked={value}
      />
      <label className="form-check-label" ntmlFor={name}>
        {children}
      </label>
    </div>
  );
};
CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}


export default React.memo(CheckBoxField);
