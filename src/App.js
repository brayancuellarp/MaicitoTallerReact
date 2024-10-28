import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { data } from './assets/data';
import './styles.css';
import Login from './Login'; // Importa el componente Login

const App = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showLogin, setShowLogin] = useState(false); // Estado para controlar la visibilidad del login

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % data.length);
    };

    const handleLoginClick = () => {
        setShowLogin(true); // Muestra el formulario de login
    };

    return (
        <div>
            <header className="header">
                <div className="logo" onClick={toggleMenu}>
                    <img src="/images/maicito logo.jpg" alt="Logo Maicito Taller" />
                </div>
                <nav className={`nav ${menuVisible ? 'visible' : ''}`}>
                    <ul>
                        <li><a href="#inicio" className="nav-link">Inicio</a></li>
                        <li><a href="#eventos" className="nav-link">Eventos</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#" className="nav-link" onClick={handleLoginClick}>Login</a></li> {/* Llama a handleLoginClick */}
                    </ul>
                </nav>
            </header>

            {showLogin ? ( // Si showLogin es true, renderiza el Login
                <Login />
            ) : (
                <>
                    <section id="inicio" className="section hero-section">
                        <div className="hero-background"></div>
                        <div className="hero-content">
                            <h1>Bienvenidos a Maicito Taller</h1>
                            <p>Aprende a cocinar auténtica comida mexicana</p>
                        </div>
                    </section>

                    <section id="eventos" className="section eventos-section">
                    <h2>¡Celebra el 3er evento anual del Mezcal Day en Tokio!</h2>
                    <p>Aquí puedes ver nuestros eventos más recientes.</p>

                    <h3>Detalles del evento</h3>
                    <ul>
                        <li><strong>Fecha y Hora:</strong> 19 de octubre (sábado), 14:00 - 19:30</li>
                        <li><strong>Lugar:</strong> CASA JINNAN</li>
                        <li><strong>Entrada:</strong> Venta anticipada ¥4,000 | Día del evento ¥5,000</li>
                    </ul>

                    <h3>Actividades destacadas</h3>
                    <ul>
                        <li>Degustación gratuita de mezcales exclusivos y marcas únicas en Japón</li>
                        <li>Cócteles artesanales de mezcal por <strong>@cuishe_tokyo</strong> y <strong>@maicito_taller</strong></li>
                        <li>Comida mexicana auténtica de <strong>@afro_tacos</strong></li>
                        <li>Venta de productos mexicanos y un altar de Día de Muertos</li>
                    </ul>

                    <p>Únete y vive una experiencia cultural única que celebra el sabor y la historia del mezcal mexicano. ¡Nos vemos en CASA JINNAN para el Mezcal Day!</p>


                        {/* Carrusel de imágenes */}
                        <div className="carousel">
                            <button className="carousel-btn left" onClick={handlePrev}>&#10094;</button>
                            <div className="carousel-images">
                                <img src={data[currentIndex].imgUrl} alt="Evento" className="carousel-image" />
                            </div>
                            <button className="carousel-btn right" onClick={handleNext}>&#10095;</button>
                        </div>
                    </section>

                    {/* Secciones restantes */}
                    <section id="about" className="section about-section">
                        <div className="content-section">
                            <h1>Acerca de Maicito Taller</h1>
                            <p>東京でメキシコ料理教室を開催中. プライベートレッスン、コンサルティング→DM✉️</p>
                            <p>Mexican food cooking class in Japan. Difusión de la cultura alimentaria de México.</p>
                            <p>Maicito Taller organiza clases de cocina en Tokio, y colabora con la agencia de viajes mexicana Rumbos Experiences para ofrecer un tour culinario en México.</p>
                            <p>En este tour, se visitan tres ciudades fascinantes: Ciudad de México, Puebla y Oaxaca, con la oportunidad de degustar platos tradicionales y aprender de chefs expertos en la cultura gastronómica mexicana.</p>
                        </div>

                        <div className="video-container">
                            <iframe className="video-responsive" src="/video/Maicito_taller.mp4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </section>
                </>
            )}

            <footer>
                <p>&copy; Maicito Taller</p>
                <h2>Síguenos en Nuestras Redes Sociales</h2>
                <ul className="social-icons">
                    <li><a href="https://www.facebook.com/..."><FaFacebook /></a></li>
                    <li><a href="https://www.instagram.com/mezcalday_japan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a></li>
                    <li><a href="https://x.com/..."><FaTwitter /></a></li>
                    <li><a href="https://www.tiktok.com/..."><FaTiktok /></a></li>
                </ul>
            </footer>
        </div>
    );
};

export default App;
