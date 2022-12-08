import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../assets/images/login.png';
import PropTypes from "prop-types";

class LoginInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };

        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onEmailChangeHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value
            };
        });
    }

    onPasswordChangeHandler(event) {
        this.setState(() => {
            return {
                password: event.target.value
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.login({
            email: this.state.email,
            password: this.state.password
        });
    }


    render() {
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
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" id="email" value={this.state.email} onChange={this.onEmailChangeHandler} placeholder="Masukan Email..." />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" id="password" value={this.state.password} onChange={this.onPasswordChangeHandler} placeholder="********" />
                                </Form.Group>
                                <Link to="/about">
                                    <div className="mt-5 d-flex justify-content-center align-items-center">
                                        <Button className="btn3 fw-bold" type="submit" onClick={this.onSubmitHandler}>Masuk</Button>
                                    </div>
                                </Link>
                                <p className="mt-3 text-center">Belum punya akun? <Link to="/register">  Daftar </Link></p>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;