import React from "react";

const InputWithLabel = ({ label, name, ...props }) => {
  return (
    <div className="input-box">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} {...props} required />
    </div>
  );
};

export default InputWithLabel;
