/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../Css/proyectos.css'

function Proyectos() {
  return (
    <div className="divProyectos">
      <div classsName="containerProyecto" id="yapo">
        <h2 className="classh1">Mis Proyectos</h2>
        <div className="cajaproyectos">
          <a href={`https://here-squad2.firebaseapp.com/`}id="link"
            target="_blank">
            <img
              src={require("../imgProyectos/loginHere.png")}
              className="imgProyectos" />
            <div className="descripcion">
              <p>En Move Calm planifica tus viajes con la seguridad de no estar solx, podrás
            encontrar una comunidad con la cual interactuar, videos de relajación y meditación.</p>
            <p>React|Bootstrap|HTML|CSS|Firebase</p>
            <div className="button">
            <a href="https://github.com/kaarenzu/Here-Squad2"
          id='btn_link' target="_blank">Ver código</a>
              <a href="https://here-squad2.firebaseapp.com/"
            id='btn_link' target="_blank">Sitio Web</a>
            </div>
            </div>
          </a>
        </div>
        <div className="cajaproyectos">
          <a href={`https://bdiniscia.github.io/SCL012-MovieProject/src/`}id="link"
            target="_blank" >
            <img
              src={require("../imgProyectos/movieProyect.png")}
              className="imgProyectos" />
            <div className="descripcion">
              <p>Cine De la Costa está sorteando dos entradas a quien participe y gane una
              entretenida trivia con preguntas acerca de las películas que están nominada a los
              Oscar 2020.Participa y gana.</p>
              <p>Javascript|Bootstrap|HTML|CSS</p>
              <div className="button">
              <a href="https://github.com/kaarenzu/SCL012-MovieProject"
            id='btn_link' target="_blank">Ver código</a>
              <a href="https://bdiniscia.github.io/SCL012-MovieProject/src/"
            id='btn_link' target="_blank">Sitio Web</a>
            </div>
            </div>

          </a>

        </div>
        <div className="cajaproyectos">
          <a href={`https://tipstech-c6fe7.firebaseapp.com/#/Inicio`}id="link"
            target="_blank" >
            <img
              src={require("../imgProyectos/loginTips.png")}
              className="imgProyectos" />
            <div className="descripcion">
              <p>En Tips Tech podrás encontrar y compartir datos de ofertas en productos
              tecnológicos y así poder comprar los mejores productos a precios muy convenientes.
            </p>
            <p>Javascript|Bootstrap|HTML|CSS|Firebase</p>
            <div className="button">
            <a href="https://github.com/kaarenzu/SCL012-Social-Network"
            id='btn_link' target="_blank">Ver código</a>
              <a href="https://tipstech-c6fe7.firebaseapp.com/#/Inicio"
            id='btn_link' target="_blank">Sitio Web</a>
            </div>
            </div>
          </a>
        </div>

      </div>
    </div>

  )
}

export default Proyectos;