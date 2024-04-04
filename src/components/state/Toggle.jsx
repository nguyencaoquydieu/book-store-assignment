import React, { useState } from "react";
import "./ToggleStyles.css";

// function Toggle() {
//   return <div className="toggle"></div>;
// }

// function Toggle2() {
//     // const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }

function Toggle() {
  // 1. Enabling state: useState(...);
  // 2. Initialize state: useState(true/false);
  // 3. Reading state:
  // 4. Updating state:

  const [on, setOn] = useState(false);
  const handleToggle = () => setOn((on) => !on);
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}

export default Toggle;
