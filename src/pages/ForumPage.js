import React from 'react';
import { Link } from 'react-router-dom';
import {
    Nav, Col, Form, Row, Button,
} from 'react-bootstrap';
import {
    FaUserAlt, FaHome,
} from 'react-icons/fa';
import { MdOutlineForum } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import user from '../assets/images/profile.png';

function ForumPage() {
    return (
        <>
            <Header />
            <div className="forum-page mx-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <Nav defaultActiveKey="/" className="flex-column cc">
                                <div className="user-forum d-flex">
                                    <div className="img-forum">
                                        <img src={user} alt="img-forum" />
                                    </div>
                                    <div className="ms-3">
                                        <h1 className='fw-bold'>Forum Diskusi</h1>
                                    </div>
                                </div>
                                <Link to="/profile" className="nav-link-forum fw-bold"><FaUserAlt className="me-3" />Akun Saya</Link>
                                <Link to="/dasboard" className="nav-link-forum fw-bold ms-3"><FaHome className="me-3" />Home</Link>
                                <Link to="/about" className="nav-link-forum fw-bold ms-3"><RiAdminFill className="me-3" />Admin</Link>
                                <Link to="/forum" className="nav-link-forum fw-bold ms-3"><MdOutlineForum className="me-3" />Forum</Link>
                                <Link to="/login" className="nav-link-forum fw-bold ms-4"><FiLogOut className="me-3" />Log Out</Link>
                            </Nav>
                        </div>
                        <div className="col-md-10">
                            <div className="forum-right">
                                <h1>Forum Diskusi</h1>
                                <p>Media diskusi online yang dapat diakses tanpa dibatasi ruang dan waktu</p>
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="2" className='form-label'>
                                            Masukan Ulasan
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
                                            Hal yang ingin didiskusikan
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                    <div className="mt-2 d-flex justify-content-center align-items-center">
                                        <Button className="btn3 fw-bold" type="submit">Kirim</Button>
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

export default ForumPage;