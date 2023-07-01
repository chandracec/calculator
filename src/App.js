import React, { useState } from 'react';
import './App.css';

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ['/', '*', '-', '+'];
const ids = {
  7: 'seven', 8: 'eight', 9: 'nine',
  4: 'four', 5: 'five', 6: 'six',
  1: 'one', 2: 'two', 3: 'three',
  0: 'zero', '/': 'divide', '*': 'multiply',
  '-': 'subtract', '+': 'add'
};

const App = () => {
  const [lastPressed, setLastPressed] = useState(undefined);
  const [calc, setCalc] = useState('0');

  const handleClick = (e) => {
    const { innerText } = e.target;
    let newCalc;

    switch (innerText) {
      case 'AC':
        setCalc('0');
        break;

      case '=':
        const evaluated = eval(calc);
        console.log(evaluated);
        setCalc(evaluated);
        break;

      case '.':
        if (!calc.includes('.')) {
          newCalc = calc + '.';
        }
        break;

      default:
        if (ops.includes(innerText)) {
          const shouldAddSpace = ops.includes(lastPressed) && innerText !== '-';
          newCalc = shouldAddSpace ? `${calc.slice(0, -1)} ${innerText} ` : `${calc} ${innerText} `;
        } else {
          newCalc = calc === '0' ? innerText : calc + innerText;
        }
        break;
    }

    if (newCalc) {
      setCalc(newCalc);
    }
    setLastPressed(innerText);
  };

  return (
    <div className="calculator">
      <div id="display" className="display">
        <small></small>
        {calc}
      </div>

      <div className="nums-container">
        <button className="big-h light-grey ac" id="clear" onClick={handleClick}>AC</button>
        {nums.map(num => (
          <button
            className={`dark-grey ${num === 0 && 'big-h'}`}
            key={num}
            onClick={handleClick}
            id={ids[num]}
          >
            {num}
          </button>
        ))}
        <button className="light-grey" onClick={handleClick} id="decimal">.</button>
      </div>

      <div className="ops-container">
        {ops.map(op => (
          <button
            className="orange"
            key={op}
            onClick={handleClick}
            id={ids[op]}
          >
            {op}
          </button>
        ))}
        <button className="orange" onClick={handleClick} id="equals">=</button>
      </div>
    </div>
  );
};

export default App;
