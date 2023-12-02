// App.js
import React from 'react';
import './App.css';
// import SignUpForm from './Forms/SignUpForm';
import SignUpIn from './Forms/SignIn';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUpForm from './Forms/SignUpForm';
import HomeScreen from './Forms/HomeScreen';
import EditProfile from './Forms/EditProfile';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUpIn />}/>
          <Route path='signup' element={<SignUpForm/>}/>
        </Routes>
      </BrowserRouter> */}

      {/* Render only HomeScreen */}
      <EditProfile /> 
    </>
  );
}

export default App;
