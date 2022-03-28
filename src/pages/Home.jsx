import React from 'react'
import imghome from '../assets/img/imghome.png'
import '../styles/Home.css'

export default function Home() {
  return (
    <section className="container__home">
      <div className="container__group1">
       
        <div className="texts">
          <h1>
            MUCHO GUSTO, MI NOMBRE ES <br /> <a className='nombre'>EDGAR MATOS</a>  
          </h1>
          <p>
            Desarrollo sitios funcionales segun sea la necesidad,
            te invito a que trabajemos juntos, dale click al boton que
            esta debajo y dejame tu mensaje, un placer.
          </p>

          <div className='container__button'>
               <input type="button"  value="CONTACTAME" />
          </div>
        </div>

        <div className='container__img'>
            <img src={imghome} />
        </div>
        
      </div>
    </section>
  );
}
