import React from 'react';
import './Header.scss';

const Header = ({ student }) => {
  return (
    <header className="header">
      <div className="profile">
        <div className="avatar">
          {student.name.charAt(0)}
        </div>
        <div className="info">
          <h2>{student.name}</h2>
          <p>{student.class}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;