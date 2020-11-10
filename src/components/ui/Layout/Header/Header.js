import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Header.scss";

const Header = () => {
    return (
        <header className="header mb-4">
            <nav className="navbar navbar-expand navbar-light">
                <NavLink to="/" className="navbar-brand">Gestão de Pedidos©</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact>Pedidos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="anotacoes" exact>Anotações</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;