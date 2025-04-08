import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './MenuLateral.scss';
import {
  FaTachometerAlt,
  FaEdit,
  FaQuestionCircle,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

const MenuLateral = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const menuItems = [
    { path: '/dashboard', icon: <FaTachometerAlt />, label: 'Dashboard' },
    { path: '/redacao', icon: <FaEdit />, label: 'Redação' },
    { path: '/quiz', icon: <FaQuestionCircle />, label: 'Quiz' },
    { path: '/plano-estudos', icon: <FaCalendarAlt />, label: 'Plano' }
  ];

  if (isMobile) {
    return (
      <nav className="mobile-bottom-nav">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => 
              `mobile-nav-item ${isActive ? 'active' : ''}`
            }
          >
            <div className="mobile-nav-icon">{item.icon}</div>
            <span className="mobile-nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    );
  }

  return (
    <div className={`desktop-menu ${expanded ? 'expanded' : ''}`}>
      <div className="menu-content">

        <div className="menu-items">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `menu-item ${isActive ? 'active' : ''}`
              }
            >
              <div className="menu-icon">{item.icon}</div>
              {expanded && (
                <span className="menu-label">{item.label}</span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuLateral;