import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../assets/images/register.png';

function RegisterInput() {
    return (
        <div className="register-input d-flex">
            <div className="register-left w-50 h-100">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="image-register">
                            <img src={image} alt="Daftar/Registrasi" />
                        </div>
                        <h1> Website Yang Menyediakan Berbagai Materi Pelajaran</h1>
                        <p>Meningkatkan kualitas pembelajaran yang lebih unggul serta Mengembangkan dan menyebarluaskan materi pembelajaran untuk para pelajar</p>
                    </div>
                </div>
            </div>
            <div className="register-right w-50 h-100">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <h1>Buat Akun Baru</h1>
                        <p>Masukkan data Anda</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Masukan Nama..." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Masukan Email..." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Min. 8 karakter" />
                            </Form.Group>
                            <Link to="/login">
                                <div className="mt-5 d-flex justify-content-center align-items-center">
                                    <Button className="btn3 fw-bold" type="submit">Daftar</Button>
                                </div>
                            </Link>
                        </Form>
                        <p className="mt-3 text-center">Sudah memiliki akun?<Link to="/login"> Masuk</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterInput;