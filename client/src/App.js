// App.js
import React from 'react';
import './App.css';
// import SignUpForm from './Forms/SignUpForm';
import SignUpIn from './Forms/SignIn';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUpForm from './Forms/SignUpForm';
import JoinNewGroup from './JoinNewGroup';

function App() {
  return (
    <>
      {/*<BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUpIn />}/>
          <Route path='signup' element={<SignUpForm/>}/>
          <Route path='/' element={<CreateGroup/>}></Route>
        </Routes>
  </BrowserRouter>*/}
  <JoinNewGroup/>
    </>
  );
}

export default App;
