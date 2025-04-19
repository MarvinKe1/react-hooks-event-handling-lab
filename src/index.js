import React from 'react';
import ReactDOM from 'react-dom';
import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';


console.clear();


console.log('=== TESTING STARTED ===');
console.log('Keypad: Type in the password field');
console.log('EyesOnMe: Click the button then click away');

ReactDOM.render(
  <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
    <h2>Keypad Component Test</h2>
    <Keypad />
    
    <h2 style={{ marginTop: '30px' }}>EyesOnMe Component Test</h2>
    <EyesOnMe />
    
    <p style={{ marginTop: '30px', color: '#666' }}>
      Check browser console (F12) for event logs
    </p>
  </div>,
  document.getElementById('root')
);
