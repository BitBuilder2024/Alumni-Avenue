import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form className="signup-form">
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Confirm Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="form-button">
              Sign Up
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;