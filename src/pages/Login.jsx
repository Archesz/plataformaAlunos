import React, { useState } from 'react';
import '../styles/login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de autenticação
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <div className="header-login">
          <h1>Cursinho Vestibular</h1>
          <p>Prepare-se para o seu futuro</p>
        </div>
        
        <form onSubmit={handleSubmit} className="loginForm">
          <div className="inputGroup">
            <label htmlFor="registrationNumber">Número de Cadastro</label>
            <input
              type="text"
              id="registrationNumber"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
            />
          </div>
          
          <div className="inputGroup">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="loginButton" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        
        <div className="footer">
          <p>Pela difusão do pensamento crítico.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;