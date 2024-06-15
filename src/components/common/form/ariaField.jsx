import React from 'react';

import PropTypes from "prop-types";

const AriaField = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
  ...rest
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };
  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <div className="input-group has-validation">
        <textarea
          id={name}
          name={name}
          rows="3"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={getInputClasses()}
          {...rest}
        ></textarea>

        {error && <div className="invalid-feedback ">{error}</div>}
      </div>
    </div>
  );
};

AriaField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default React.memo(AriaField);
