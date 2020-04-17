/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../Css/myContainer.css';

export function MyContainer() {
  return (
    <div className="contenedor">
      <div className="mycontainer">
        <div className="divImagen">
          <img className='imagen'
            src="https://raw.githubusercontent.com/kaarenzu/Mi-Portafolio/master/src/imagenes/curriculum.png"
          />
        </div>
        <div className="divH5">
          <h5>¡Hola! Soy Karen Zúñiga,
          Front-End Developer. Tengo 28 años y me defino como una profesional
          con capacidad de trabajo en equipo y espíritu emprendedor.
          Los nuevos desafíos los tomo como una oportunidad de aprender más,
          con perseverancia y enfoque proactivo.
          Me encanta la música, el deporte, aprender cosas nuevas e ir creciendo
          personal y laboralmente.
       </h5>
        </div>
        <div className="divButtonCv">
          {/* <button className='btn_cv'>CV</button> */}
          <a href="https://drive.google.com/file/d/1T_eeR1Xe6734ew4G9CufuMEaEhgiJnPO/view?usp=sharing"
            className='btn_cv' target="_blank">CV</a>
        </div>
      </div>
    </div>
  )
}