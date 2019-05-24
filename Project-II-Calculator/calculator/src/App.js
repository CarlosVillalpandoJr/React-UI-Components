import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='app-container'>
      <CalculatorDisplay total={0} />

      <div className='top-content'>
        <div className='wider'>
          <ActionButton display='clear' />
          <div className='narrow'>
            <ActionButton display='/' />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;
