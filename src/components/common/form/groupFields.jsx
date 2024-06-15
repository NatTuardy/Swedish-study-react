import React, { useState } from "react";
import PropTypes from "prop-types";

const GroupFields = ({ label, name, value, onChange, error, ...rest }) => {
  console.log(name); //sections
  console.log(value); //{}
  let obj = {}
  let target
  
  const handleChange = ({ target }) => {
    console.log("name:", target.name, "value:", target.value);
    
    obj =  {...obj, [target.name] : target.value}
    console.log("obj", obj)
    target = { 
        name: "section", // треба писати ключ words
        value: obj
    }
    onChange(target);
  
  };

  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };
  const getLabelClasses = () => {
    return "floatingInput" + (error ? "Invalid" : "");
  };
  return (
    <div className="row g-2">
      <div className="col-md">
        <div className="input-group has-validation form-floating">
          <input
            type="text"
            id="swedish"
            name="swedish"
            value={value.words}
            onChange={handleChange}
            className={getInputClasses()}
            {...rest}
          />
          <label htmlFor="swedish">Swedish</label>
          {error && <div className="invalid-feedback ">{error}</div>}
        </div>
      </div>
      <div className="col-md">
        <div className="input-group has-validation form-floating">
          <input
            type="text"
            id="russian"
            name="russian"
            value={value.words}
            onChange={handleChange}
            className={getInputClasses()}
            {...rest}
          />
          <label htmlFor="russian">Russian</label>
          {error && <div className="invalid-feedback ">{error}</div>}
        </div>
      </div>
    </div>
    // </div>
  );
};

GroupFields.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default React.memo(GroupFields);
