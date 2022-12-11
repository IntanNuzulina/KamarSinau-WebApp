import React, { Component } from 'react'
import '../styles/Header.css';
import {
    AiOutlineMenu, AiOutlineClose,
} from "react-icons/ai";

import logo from '../assets/images/logo.png';
//import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand text-info" href="/">
                            <img
                                alt=""
                                src={logo}
                                width="35"
                                className="d-inline-block align-top"
                            />{' '}<span className='kamar'>Kamar</span><span className='sinau'>Sinau</span></a>
                        <button className="navbar-toggler border border-info text-info"
                            onClick={() => { this.setState({ show: !this.state.show }) }} >
                            {this.state.show ? <AiOutlineMenu /> : <AiOutlineClose />}
                        </button>
                        <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/about">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/forum">FORUM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light ms-5" href="/register">REGISTER <span className="ms-2"> | </span> </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light ms-2" href="/login"> LOGIN </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Header;
