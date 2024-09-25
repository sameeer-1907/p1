// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="icon">
          <img src={Logo} alt="Logo" />
        </div>
        <div className={`navbar-items-container ${menuOpen ? 'open' : ''}`}>
          <div
            className={`navbar-items ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => navigate('/')}
          >
            <h1>Home</h1>
          </div>
          <div
            className={`navbar-items ${location.pathname === '/products' ? 'active' : ''}`}
            onClick={() => navigate('/products')}
          >
            <h1>Products</h1>
          </div>
          <div
            className={`navbar-items ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => navigate('/about')}
          >
            <h1>About</h1>
          </div>
          <div
            className={`navbar-items ${location.pathname === '/support' ? 'active' : ''}`}
            onClick={() => navigate('/support')}
          >
            <h1>Support</h1>
          </div>
          <div
            className={`navbar-items ${location.pathname === '/careers' ? 'active' : ''}`}
            onClick={() => navigate('/careers')}
          >
            <h1>Careers</h1>

          </div>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        </div>
      </div>
    </>
  );
}
