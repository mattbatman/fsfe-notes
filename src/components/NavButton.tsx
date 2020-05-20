import React from 'react';

const NavButton = ({ isNavOpen, setIsNavOpen }) => (
  <div
    className={`NavButton ${isNavOpen ? 'nav-x' : ''}`}
    onClick={() => setIsNavOpen(!isNavOpen)}
  >
    <div />
    <div />
    <div />
  </div>
);

export default NavButton;
