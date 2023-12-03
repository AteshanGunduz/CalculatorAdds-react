import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  const [value1, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [sum, setSum] = useState(0);

  const handle = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setSum(num1 + num2);
    } else {
      alert("Number pls");
    }
  };

  return (
    <div className="App">
      <h1>Add up</h1>

      <div className="number-inputs">
        <input
          type="number"
          className="input is-large"
          placeholder="0"
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="number"
          className="input is-large"
          placeholder="0"
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>

      <button onClick={handle}>Add!</button>

      <h2>{sum}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
