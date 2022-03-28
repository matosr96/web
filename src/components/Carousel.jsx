import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/Carousel.css'
import c1 from '../assets/img/certificates/c1.jpg'
import c2 from '../assets/img/certificates/c2.jpg'
import c3 from '../assets/img/certificates/c3.jpg'
import c4 from '../assets/img/certificates/c4.jpg'
import c5 from '../assets/img/certificates/c5.jpg'
import c6 from '../assets/img/certificates/c6.jpg'
import c7 from '../assets/img/certificates/c7.jpg'
import c8 from '../assets/img/certificates/c8.jpg'
import c9 from '../assets/img/certificates/c9.jpg'
import c10 from '../assets/img/certificates/c10.jpg'




export default function () {
  return (
    <div className='container__carousel'>
        <h1>Certificados</h1>

        <div className='container__certificates'>

            <Carousel className='carousel'>
                <div className='container__imgcertificates'>
                    <img src={c1} />
                </div>

                <div className='container__imgcertificates'>
                    <img src={c2} />
                </div>

                <div className='container__imgcertificates'>
                    <img src={c3} />
                </div>

                <div className='container__imgcertificates'>
                    <img src={c4} />
                </div>

                <div className='container__imgcertificates'>
                    <img src={c5} />
                </div>

                <div className='container__imgcertificates'>
                    <img src={c6} />
                </div>

                <div className='container__imgcertificates'>
                    <img src={c7} />
                </div>

                <div className='container__imgcertificates'>
                    <img src={c8} />
                </div>

                <div className='container__imgcertificates'>
                    <img src={c9} />
                </div>

                <div className='container__imgcertificates'>
                    <img src={c10} />
                </div>
            </Carousel>
        </div>
    </div>
  )
}
