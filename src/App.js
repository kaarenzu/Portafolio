import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'reactstrap';
import MyNavbar from './Component/Navbar.jsx'
import {MyContainer} from './Component/MyContainer.jsx'


function App() {
  return (
    <div className="app">
          
        <MyNavbar/>
        <MyContainer/>

       
    </div>
  );
}

export default App;