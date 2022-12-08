import React from 'react';
import RegisterInput from '../components/RegisterInput';
import { useNavigate } from "react-router-dom";
import { register } from "../utils/api";

function RegisterPage() {
    const navigate = useNavigate();
    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate("/login");
        }
    }

    return (
        <section className="register-page position-relative">
            <div className="container-fluid">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-12 position-absolute top-50 start-50 translate-middle">
                        <RegisterInput register={onRegisterHandler} />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default RegisterPage;