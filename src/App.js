import React, {Fragment}from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'reactstrap';
import MyNavbar from './Component/Navbar.jsx'
import {MyContainer} from './Component/MyContainer.jsx'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      state: true,
    }
    this.onclickState= this.onclickState.bind(this);
  }
  onclickState(){
    this.setState({state:false})
  }
  render(){
      if(this.state.state){
        return ( <Fragment className="app">
          <MyNavbar onClick={this.onclickState}/>
          <MyContainer/>
        </Fragment>)
      }
    return (
      <div className="app">
            
         {this.state.state?null:<MyNavbar/>}
  
         
      </div>
    );
  }
  
}

export default App;