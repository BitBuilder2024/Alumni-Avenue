import React from 'react';
import './App.css';
import SignUp from './SignUp'; // Adjust this import path to where your SignUp component is located

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Include the SignUp component here */}
        <SignUp />
      </header>
    </div>
  );
}

export default App;

