import React from 'react';

function Keypad() {
  const handleChange = (event) => {
    console.log('Entering password...');
  };

  return (
    <div>
      <input 
        type="password" 
        onChange={handleChange}
        placeholder="Enter password"
      />
    </div>
  );
}

export default Keypad;