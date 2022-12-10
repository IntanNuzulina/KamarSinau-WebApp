import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FaUserAlt, FaHome } from 'react-icons/fa';
import { MdOutlineForum } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri'
import { GiHelp } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import user from '../assets/images/profile.png';
import image1 from '../assets/images/SD.png';
import image2 from '../assets/images/SMP.png';
import image3 from '../assets/images/SMA.png';
import image4 from '../assets/images/Pengguruan Tinggi.png';

function DasboardPage() {
    return (
        <>
            <Header />
            <div className="dasboard-page mx-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <Nav className="flex-column cc">
                                <div className="user-dasboard d-flex">
                                    <div className="img-dasboard">
                                        <img src={user} alt="img-profile" />
                                    </div>
                                    <div className="ms-3">
                                        <h1 className='fw-bold'>DASBOARD</h1>
                                    </div>
                                </div>
                                <Link to="/dasboard" className="nav-link-dasboard fw-bold"><FaUserAlt className="me-3" />Akun Saya</Link>
                                <Link to="link-1" className="nav-item-dasboard">Profile</Link>
                                <Nav.Link eventKey="link-1" className="nav-link-dasboard fw-bold"><GiHelp className="me-3" /> Help</Nav.Link>
                                <Nav.Link eventKey="link-1" className="nav-link-dasboard fw-bold"><FaHome className="me-3" />Home</Nav.Link>
                                <Nav.Link eventKey="link-1" className="nav-link-dasboard fw-bold"><RiAdminFill className="me-3" />Admin</Nav.Link>
                                <Nav.Link eventKey="link-1" className="nav-link-dasboard fw-bold"><MdOutlineForum className="me-3" />Forum</Nav.Link>
                                <Nav.Link eventKey="/login" className="nav-link-dasboard fw-bold"><FiLogOut className="me-3" />Keluar</Nav.Link>
                            </Nav>
                        </div>
                        <div className="col-md-10 bg-dark">
                            <div className="dasboard-right">
                                <h1>Saya Mau Membaca Materi Di Jenjang?</h1>
                                <div className="category-content">
                                    <div className="row mx-0 p-0">
                                        <div className="container-fluid">
                                            <div className="col-12">
                                                <h4>Jenjang Pendidikan</h4>
                                                <div className="list-category d-flex row justify-content-center align-items-center mb-3">
                                                    <div className="col-12 col-md-3 col-lg-3">
                                                        <div className="dasboard-category mb-3">
                                                            <div className="category-img">
                                                                <img className="d-block w-100" src={image1} alt="gambar kategori SD" />
                                                            </div>
                                                            <span className="category-name">SD</span>
                                                            <Link to="/modules"><button type="button" className="btn fw-bold ms-3 me-3">Baca</button></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-3 col-lg-3">
                                                        <div className="dasboard-category mb-3">
                                                            <div className="category-img">
                                                                <img className="d-block w-100" src={image2} alt="gambar kategori SMP" />
                                                            </div>
                                                            <span className="category-name">SMP</span>
                                                            <Link to="/modules"><button type="button" className="btn fw-bold  ms-3 me-3">Baca</button></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-3 col-lg-3">
                                                        <div className="dasboard-category mb-3">
                                                            <div className="category-img">
                                                                <img className="d-block w-100" src={image3} alt="gambar kategori SMA" />
                                                            </div>
                                                            <span className="category-name">SMA</span>
                                                            <Link to="/modules"><button type="button" className="btn fw-bold ms-3 me-3">Baca</button></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-3 col-lg-3">
                                                        <div className="dasboard-category mb-3">
                                                            <div className="category-img">
                                                                <img className="d-block w-100" src={image4} alt="gambar kategori Penggruan Tinggi" />
                                                            </div>
                                                            <span className="category-name">Pengguruan Tinggi</span>
                                                            <Link to="/modules"><button type="button" className="btn fw-bold ms-3 me-3">Baca</button></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DasboardPage;