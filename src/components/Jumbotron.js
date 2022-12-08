import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import images from '../assets/images/jumbotron.jpg';

function Jumbotron() {
    return (
        <div className=" jumbotron mx-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100"
                                    src={images}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className="caption align-items-center justify-content-between">
                                        <h2>SELAMAT DATANG DI Kamar<span className='sinau'>Sinau</span></h2>
                                        <h4>Berbagai Materi Belajar untuk Memandu Para Pelajar</h4>
                                        <p>By@Kamar<span className='sinau'>Sinau</span></p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100"
                                    src={images}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <div className="caption align-items-center justify-content-between">
                                        <h3>Sudah Siap Untuk Belajar?</h3>
                                        <h4>Semoga Aktifitas Belajarmu seru dan Menyenangkan Ya...</h4>
                                        <h6>By@Kamar<span className='sinau'>Sinau</span></h6>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
