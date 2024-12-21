import React from 'react';
import Menu from './Menu';

const Header = () => {
  return (
    <header>
      <div className="WebNombre">
        <h1>GameShop</h1>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
