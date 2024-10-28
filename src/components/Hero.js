// src/components/Hero.js
import React from 'react';
import './Hero.css'; // Aquí puedes incluir tu CSS específico para el Hero

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>Lo mejor de la cocina mexicana</h1>
                <p>Descubre nuestras clases y eventos culinarios</p>
                <a href="/login" className="btn btn-primary">Inscribete ahora</a>
            </div>
        </section>
    );
};

export default Hero;
