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
            <div className='divCont'data-toggle="modal" data-target="#modalCorreo" >
              <img className='ico_cont'
                src={require("../img/comunicaciones.png")}
                />
              <div className="textoH6">
                <h6>Gmail</h6>
              </div>
              <div className="modal fade" id="modalCorreo" htmlFor="-1"
                role="dialog" aria-labelledby="miCorreo" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div id="modalCont" className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="miCorreo">Karenzcortes0211@gmail.com</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-footer">
                      <button type="button" id="btnCerrarMod" className="btn btn-secondary"
                        data-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
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