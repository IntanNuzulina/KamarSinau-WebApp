import React from 'react';
import {
    FaGithub, FaLinkedin, FaInstagram, FaWhatsapp,
} from 'react-icons/fa';
import image from '../assets/images/logo.png';

function Footer() {
    return (
        <div className="footer mx-3 bg-dark">
            <div className="container-fluid">
                <div className="row">
                    <div className="footer-right col-12 col-md-4 col-lg-4">
                        <h1 className="logo2 fw-bold">
                            <img className="img ms-1"
                                src={image}
                                alt="Logo KamarSinau" />{'   '}<span className="kamar">Kamar</span><span className="sinau">Sinau</span>
                        </h1>
                        <p className='ms-3'>Untuk Informasi yang lebih Details, Anda dapat mengunjungi dan Mengikuti akun kami Di:</p>
                        <div className="sosial-media-list d-flex ms-5">
                            <div className="sosial-media me-2"><FaGithub /></div>
                            <div className="sosial-media me-2"><FaLinkedin /></div>
                            <div className="sosial-media me-2"><FaInstagram /></div>
                            <div className="sosial-media me-2"><FaWhatsapp /></div>
                        </div>
                    </div>
                    <div className="mt-3 col-12 col-md-6 col-lg-6 offset-lg-2 offset-md-2 footer-left">
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-4">
                                <h3>Informasi</h3>
                                <h6>FAQ's</h6>
                                <h6>Admin</h6>
                                <h6>Pusat Bantuan</h6>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <h3>Navigasi</h3>
                                <h6>Home</h6>
                                <h6>About Us</h6>
                                <h6>Forum</h6>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <h3>Ikuti Kami</h3>
                                <h6>Github</h6>
                                <h6>Linkedin</h6>
                                <h6>Istagram</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="text-center p-2 col-12 bg-dark">
                        <h6>Copyright &copy; 2022 Kamar<span className="sinau">Sinau</span></h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;