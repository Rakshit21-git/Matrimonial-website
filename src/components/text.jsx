import React, { useState } from 'react';

function CheckboxButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me
      </label>
      <button disabled={!isChecked}>
        Submit
      </button>
    </div>
  );
}

export default CheckboxButton;
