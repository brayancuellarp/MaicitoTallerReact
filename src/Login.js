import React from 'react';
import './styles.css';

const Login = () => {
    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form action="/login" method="POST">
                <div className="form-group">
                    <label htmlFor="username">Usuario o Correo Electrónico</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="login-btn">Ingresar</button>
                <div className="forgot-password">
                    <a href="#" onClick={() => alert('Función para restablecer la contraseña')}>¿Olvidaste tu contraseña?</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
