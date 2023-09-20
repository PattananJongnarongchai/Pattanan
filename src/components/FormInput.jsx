import React from 'react';


function FormInput({ label, type, name, value, onChange, error }) {
  return (
    <div className="form-group">
      <br /><label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        
        
        
       
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default FormInput;