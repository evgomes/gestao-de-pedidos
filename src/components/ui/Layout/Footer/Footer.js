import React from 'react';

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer d-flex justify-content-around">
           <p>Gestão de Pedidos - ©2020</p>
           <p>Desenvolvido por <a href="https://evandroggomes.com.br" target="blank">Evandro Gomes</a></p>
        </footer>
    );
}

export default Footer;