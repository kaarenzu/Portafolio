/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, {Fragment} from 'react';
import '../Css/contacto.css';


function Contacto() {
  return (
    <Fragment>
      <div className="contTotal">
        <div className="containerContacto">
          <div className="contacto">
            <h2 className="classh1">Contáctame</h2>
          </div>
          <div className="imgContacto">
            <div className='divCont'>
              <a href={`https://github.com/kaarenzu?tab=repositories`}
                target="_blank" >
                <img className='ico_cont'
                  src={require("../img/redes-sociales.png")} />
                <div className="textoH6">
                  <h6>GitHub</h6>
                </div>
              </a>
            </div>
            <div className='divCont' >
              <a href={`mailto:karenzcortes0211@gmail.com`}>
              <img className='ico_cont'
                src={require("../img/comunicaciones.png")}
                />
              <div className="textoH6">
                <h6>Gmail</h6>
              </div>

              </a>
            
          
            </div>
            <div className='divCont'>
              <a href={`https://www.linkedin.com/in/karen-andrea-zu%C3%B1iga-cortes-0a41a31a1`}
                target="_blank" >
                <img className='ico_cont'
                  src={require("../img/redes-sociales (1).png")} />
                <div className="textoH6">
                  <h6>Linkedin</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Contacto;