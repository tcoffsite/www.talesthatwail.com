import React, { useState } from "react";

function Input(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }
  
  return (
    <div className="form-group">
      <input
        id={props.id}
        type={inputType}
        value={inputValue}
        name={props.id}
        onChange={handleChange}
        class="form-control"
        placeholder={props.placeholder}
      />
    </div>
  );
}
export default Input;
