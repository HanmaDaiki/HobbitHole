import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Header() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <h1 className="site-name">Hobbit Hole</h1>
      <div className="profile">
        <h2 className="profile__name">Hello, {currentUser.name}</h2>
        <button className="profile__button-close">Exit</button>
      </div>
    </header>
  );
}

export default Header;
