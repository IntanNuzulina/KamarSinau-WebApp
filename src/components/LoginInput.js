import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../assets/images/login.png';

function LoginInput() {
    return (
        <div className="login-input d-flex">
            <div className="login-left w-50 h-100">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="image-login">
                            <img src={image} alt=" Gambar Login" />
                        </div>
                        <h1>Website Yang Menyediakan Berbagai Materi Pelajaran</h1>
                        <p>Meningkatkan kualitas pembelajaran yang lebih unggul serta Mengembangkan dan menyebarluaskan materi pembelajaran untuk para pelajar</p>
                    </div>
                </div>
            </div>
            <div className="login-right w-50 h-100">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <h1>Selamat Datang Di KamarSinau</h1>
                        <p>Masukkan Email dan Password Anda</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Masukan Email..." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="********" />
                            </Form.Group>
                            <Link to="/dasboard">
                                <div className="mt-5 d-flex justify-content-center align-items-center">
                                    <Button className="btn3 fw-bold" type="submit">Masuk</Button>
                                </div>
                            </Link>
                        </Form>
                        <p className="mt-3 text-center">Belum punya akun? <Link to="/register">  Daftar</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginInput;