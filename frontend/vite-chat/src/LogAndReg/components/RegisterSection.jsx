import React, { useState } from 'react';
import "./LogReg.css";
import userLogo from "../../../public/img/bx_bxs-user.svg";
import closeLogo from "../../../public/img/bx_bxs-lock-alt.svg";
import mailLogo from "../../../public/img/codicon_mail.svg";

function RegisterSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://backend.todorite.live/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const resultData = await response.json();

      if (!response.ok) {
        setResult(resultData.error || 'Ошибка валидации');
      } else {
        window.location.href = '/login';
      }
    } catch (error) {
      console.log('Ошибка', error);
      setResult('Произошла ошибка. Попробуйте еще раз.');
    }
  };

  return (
    <section className="register-container">
      <div className="register-menu">
        <div className="welcome-menu">
          <p className="hello-text">Hello!</p>
          <p className="sign-up-text">Sign Up to Get Started</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-menu">
            <div id="result">{result}</div>
            <div className="input-container">
              <img className="menu-icon" src={userLogo} alt="User Icon" />
              <input
                className="input-name"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
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
              <button className="register-button" type="submit">Register</button>
              <a className="login-redirect" href="/login/">
                Already have an account? Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegisterSection;
