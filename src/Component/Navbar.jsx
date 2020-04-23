/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { MyContainer } from './MyContainer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Habilidades } from './Habilidades.jsx';
import Proyectos from './Proyectos.jsx';
import Contacto from './Contacto';
import '../Css/myNavbar.css'

class MyNavbar extends React.Component {
  constructor() {
    super();
    this.state = {
      estado: false
    }
    this.onClickEstado = this.onClickEstado.bind(this);
  }

  onClickEstado() {
    if (!this.state.estado) {
      this.setState({ estado: true })
    }
    if (this.state.estado) {
      this.setState({ estado: false })
    }
    console.log(this.state.estado, 'mi estado')
  }
  render() {
    return (
      <Router>
        <header>
          <div className='menu_bar'>
            <img className='ico_menu'
              onClick={this.onClickEstado}
              src={require("../imagenes/menu.ico")}            />
          </div>
        </header>
        {/* nav movil */}
        {this.state.estado &&
          <nav className="menuMovile">
            <ul>
              <Link to="/AcercadeMi" className="text-white "
                onClick={this.onClickEstado}>
                <li>Acerca de mi</li></Link>
              <Link to="/Habilidades" className="text-white "
                onClick={this.onClickEstado}>
                <li>Habilidades</li></Link>
              <Link to="/Proyectos" className="text-white "
                onClick={this.onClickEstado}>
                <li>Proyectos</li></Link>
              <Link to="/Contacto" className="text-white "
                onClick={this.onClickEstado}>
                <li>Contacto</li></Link>
            </ul>
          </nav>
        }
        {/* Nav pc */}
        <nav className="menu">
          <ul>
            <Link to="/AcercadeMi" className="text-white ">
              <li>Acerca de mi</li></Link>
            <Link to="/Habilidades" className="text-white ">
              <li>Habilidades</li></Link>
            <Link to="/Proyectos" className="text-white ">
              <li>Proyectos</li></Link>
            <Link to="/Contacto" className="text-white ">
              <li>Contacto</li></Link>
          </ul>
        </nav>
        <Route path="/AcercadeMi">
          <MyContainer />
        </Route>
        <Route exact path="/Portafolio">
          <MyContainer />
        </Route>

        <Route path="/Habilidades">
          <Habilidades />
        </Route>

        <Route path="/Proyectos">
          <Proyectos />
        </Route>

        <Route path="/Contacto">
          <Contacto />
        </Route>
      </Router>
    )
  }
}
export default MyNavbar;