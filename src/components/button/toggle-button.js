import React from "react";
import "./toggle-button.style.css"; // Import your custom CSS file

function ToggleButton({ checked, onChange }) {
  return (
    <div className="switch">
      <input
        type="checkbox"
        id="toggle"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor="toggle"
        className={checked ? "toggle-label checked" : "toggle-label"}
      ></label>
    </div>
  );
}

export default ToggleButton;
