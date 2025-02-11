import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.svg';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [inputState, setInputState] = useState('');

  const addInput = val => {
    setInputState(inputState + val);
  };

  const performOperation = () => {
    if (!inputState) {
      setInputState('Invalid expression!')
      return;
    }

    try {
      setInputState(evaluate(inputState))
    }
    catch (e) {
      setInputState('err!')
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='FreeCodeCamp Logo' />
      </div>
      <div className='calc-container'>
        <Screen input={inputState} />
        <div className='row'>
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className='row'>
          <ButtonClear clearHandler={() => setInputState('')}>Clear</ButtonClear>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className='row'>
          <Button clickHandler={performOperation}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
