import React from 'react';

function FormTextarea({ label, name, value, onChange, error }) {
  return (
    <div className="form-group">
      <br /><label htmlFor={name}>{label}</label>
      <textarea
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={name}
        name={name}
        placeholder={label}
        rows="5"
        value={value}
        onChange={onChange}
        style={{border:'1px solid rgb(24, 127, 196' , width: '300px', height: '70px'}}
        
      ></textarea>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default FormTextarea;
