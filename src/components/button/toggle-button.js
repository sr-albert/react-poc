import React, { useState } from "react";
import "./toggle-button.style.css"; // Import your custom CSS file

function ToggleButton() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="switch">
      <input
        type="checkbox"
        id="toggle"
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor="toggle"
        className={checked ? "toggle-label checked" : "toggle-label"}
      ></label>
    </div>
  );
}

export default ToggleButton;
