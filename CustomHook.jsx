/* ToggleHooks.jsx */
import { useState } from 'react';

// Custom Hook: useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggle];
}

export default useToggle;

/* App.jsx */
import React from 'react';
import useToggle from './useToggle'; // Import the custom hook

function ToggleComponent() {
  const [isToggled, toggle] = useToggle(false); // Use the custom hook

  return (
    <div>
      <p>Toggle value: {isToggled ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ToggleComponent;

