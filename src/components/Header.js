// src/components/Header.js
import React, { useState } from 'react';
import './Header.css'; // Aquí puedes incluir tu CSS específico para el Header

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/images/maicito logo.jpg`} alt="Logo Maicito Taller" />
            </div>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>
                <ul>
                    <li><a href="/" className="nav-link">Inicio</a></li>
                    <li><a href="/eventos" className="nav-link">Eventos</a></li>
                    <li><a href="/about" className="nav-link">About</a></li>
                    <li><a href="/login" className="nav-link">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
