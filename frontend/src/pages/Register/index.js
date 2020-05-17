import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro e divulgue os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                        Já tenho cadastro
                    </Link>

                </section>
                <form>
                    <input placeholder="Nome da ONG"/>
                    <input placeholder="Email"/>
                    <input placeholder="WhatsApp"/>


                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}