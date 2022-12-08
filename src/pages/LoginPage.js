import React from 'react';
import { login } from "../utils/api";
import LoginInput from '../components/LoginInput';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const loginSuccess = useNavigate();
    async function onLogin({ email, password }) {

        const { error } = await login({ email, password });
        if (!error) {
            loginSuccess("/");
        }
    }

    return (
        <section className="login-page position-relative">
            <div className="container-fluid">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-12 position-absolute top-50 start-50 translate-middle">
                        <LoginInput login={onLogin} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;