import React from 'react';
import './App.css';
import MyNavbar from './Component/Navbar.jsx'
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