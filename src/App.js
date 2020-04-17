import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'reactstrap';
import MyNavbar from './Component/Navbar.jsx'
// import { MyContainer } from './Component/MyContainer'
import {
  BrowserRouter as Router
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">

          <MyNavbar />


        </div>
      </Router>

    );
  }
}

export default App;