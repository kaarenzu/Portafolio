/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../Css/habilidades.css'

export function Habilidades() {
  return (
    <div className="contenedorHab">
      <div className="mycontainerHab">
        <div className="divH1">
          <h1 className="classh1">Desarrollo Web</h1>
        </div>
        <div className="imagenesHab">
          <div className="imagen_hab">
            <img
              src={require("../img/javascript.ico")}
              className="ico_hab" />
            <div className="textH6">
              <h6 className="classh6">Javascript</h6>
            </div>
          </div>
          <div className="imagen_hab">
            <img
              src={require("../img/css3.ico")}
              className="ico_hab" />
            <div className="textH6">
              <h6 className="classh6">CSS</h6>
            </div>
          </div>
          <div className="imagen_hab">
            <img
              src={require("../img/html5.ico")}
              className="ico_hab" />
            <div className="textH6">
              <h6 className="classh6">HTML</h6>
            </div>
          </div>
          <div className="imagen_hab">
            <img
              src={require("../img/git.ico")}
              className="ico_hab" />
            <div className="textH6">
              <h6 className="classh6">Git</h6>
            </div>
          </div>
          <div className="imagen_hab">
            <img
              src={require("../img/github.ico")}
              className="ico_hab" />
            <div className="textH6">
              <h6 className="classh6">GitHub</h6>
            </div>
          </div>
          <div className="imagen_hab">
            <img
              src={require("../img/react.ico")}
              className="ico_hab" />
            <div className="textH6">
              <h6 className="classh6">React</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="mycontainerTrans">
        <div className="divH1">
          <h1 className="classh1">Transversales</h1>
        </div>
        <div className="trans">
          <div className="transversales">
            <img className='ico_trans'
              src={require("../imagenes/trabajoenequipo.png")}/>         
              <div className="text">
              <h6 className="classh6">Trabajo en equipo</h6>
            </div>
          </div>
          <div className="transversales">
            <img className='ico_trans'
            src={require("../imagenes/metodagil.png")}/>
            <div className="text">
              <h6 className="classh6">Metodología Ágil</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Habilidades;