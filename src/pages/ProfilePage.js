import React from 'react';
import { Link } from 'react-router-dom';
import {
    Nav, Col, Form, Row, Button,
} from 'react-bootstrap';
import {
    FaUserAlt, FaHome, FaRegEdit,
} from 'react-icons/fa';
import { MdOutlineForum } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { AiFillDashboard } from 'react-icons/ai';
import Header from '../components/Header';
import Footer from '../components/Footer';
import user from '../assets/images/profile.png';

function ProfilePage() {
    return (
        <>
            <Header />
            <div className="profile-page mx-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <Nav defaultActiveKey="/" className="flex-column cc">
                                <div className="user-profile d-flex">
                                    <div className="img-profile">
                                        <img src={user} alt="img-profile" />
                                    </div>
                                    <div className="ms-3">
                                        <h1 className='fw-bold'>PROFILE</h1>
                                        <p><FaRegEdit className="me-1" />Ubah profile</p>
                                    </div>
                                </div>
                                <Nav.Link eventKey="link-1" className="nav-link-profile fw-bold"><FaUserAlt className="me-3" />Akun Saya</Nav.Link>
                                <Nav.Link eventKey="link-1" className="nav-item-profile ms-4">Ubah Password</Nav.Link>
                                <Link to="/" className="nav-link-dasboard fw-bold"><FaHome className="me-3" />Home</Link>
                                <Link to="/about" className="nav-link-profile fw-bold"><RiAdminFill className="me-3" />Admin</Link>
                                <Link to="/forum" className="nav-link-forum fw-bold"><MdOutlineForum className="me-3" />Forum</Link>
                                <Link to="/dasboard" className="nav-link-forum fw-bold ms-4"><AiFillDashboard className="ms-1 me-3" />Dashboard</Link>
                                <Link to="/login" className="nav-link-profile fw-bold ms-2"><FiLogOut className="me-3" />Log Out</Link>
                            </Nav>
                        </div>
                        <div className="col-md-10">
                            <div className="profile-right">
                                <h1>Profil Saya</h1>
                                <p>Perbarui Profil Anda </p>
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="2" className='form-label'>
                                            Username
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2" className='form-label'>
                                            Nama
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2" className='form-label'>
                                            Alamat
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2" className='form-label'>
                                            Email
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2" className="form-label">
                                            Nomor HP
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2" className='form-label'>
                                            Jenis Kelamin
                                        </Form.Label>
                                        <Col sm="10">
                                            <div className="d-flex mt-2 form-label">
                                                <Form.Check className="me-3" type="radio" id="radio" label="laki-laki" />
                                                <Form.Check className="me-3" type="radio" id="radio" label="perempuan" />
                                            </div>
                                        </Col>
                                    </Form.Group>
                                    <div className="mt-2 d-flex justify-content-center align-items-center">
                                        <Button className="btn3 fw-bold" type="submit">Simpan Perubahan</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProfilePage;
