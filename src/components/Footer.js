// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Aquí puedes incluir tu CSS específico para el Footer

const Footer = () => {
    return (
        <footer>
            <p>© 2024 Maicito Taller. Todos los derechos reservados.</p>
            <h2>Siguenos en Nuestras Redes Sociales</h2>
            <ul className="social-icons">
                <li>
                    <a href="https://www.facebook.com/maicitotaller/about/?ref=page_internal&paipv=0" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/maicito_taller/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://x.com/EmbamexJP/status/1704779943077716320" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@maicitotaller" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
