import React, { useState } from 'react';
import "./LogReg.css";
import mailLogo from "../../../public/img/codicon_mail.svg";
import closeLogo from "../../../public/img/bx_bxs-lock-alt.svg";

function LoginSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend.todorite.live/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const resultData = await response.json();
      
      if (!response.ok) {
        setResult(resultData.error || 'Ошибка валидации');
      } else {
        document.cookie = `token=${resultData.token}; path=/;`;
        window.location.href = '/app';
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setResult('Произошла ошибка. Попробуйте еще раз.');
    }
  };

  return (
    <section className="register-container">
      <div className="register-menu">
        <div className="welcome-menu">
          <p className="hello-text">Hello Again!</p>
          <p className="sign-up-text">Welcome Back</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-menu">
            {/* Вывод результата */}
            <div id="result">{result}</div>
            <div className="input-container">
              <img className="menu-icon" src={mailLogo} alt="Mail Icon" />
              <input
                className="input-email"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <img className="menu-icon" src={closeLogo} alt="Lock Icon" />
              <input
                className="input-pass"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="buttons-container">
              <button className="register-button" type="submit">
                Login
              </button>
              <a className="login-redirect" href="../register/">
                Don't have an account? Register
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginSection;

