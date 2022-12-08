import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../assets/images/register.png';
import PropTypes from "prop-types";

class RegisterInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onNameChange(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            };
        });
    }

    onEmailChange(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            };
        });
    }

    onPasswordChange(event) {
        this.setState(() => {
            return {
                password: event.target.value,
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
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
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" id="name" value={this.state.name} onChange={this.onNameChange} placeholder="Masukan Nama..." />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" id="email" value={this.email} onChange={this.onEmailChange} placeholder="Masukan Email..." />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" id="password" autoComplete="current-password" value={this.password} onChange={this.onPasswordChange} placeholder="Min. 8 karakter" />
                                </Form.Group>
                                <Link to="/login">
                                    <div className="mt-5 d-flex justify-content-center align-items-center">
                                        <Button className="btn3 fw-bold" type="submit" onClick={this.onSubmitHandler}>Daftar</Button>
                                    </div>
                                </Link>
                                <p className="mt-3 text-center">Sudah memiliki akun?<Link to="/login"> Masuk</Link></p>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;