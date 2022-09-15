import React from 'react'
import './Header.scss'

export const Header: React.FC = () => {
  return (
    <header className="header">
    <div className="container">
      <div className="header__inner">
        <div className="header__logo">
          <a className="logo__link" href="#">
            <img className="logo__img" src="images/logo.svg" />
          </a>
        </div>
        <div className="header__search">
          <form className="search-form" action="#">
            <img className="search-form__icon" src="images/search.svg" />
            <input
              className="search-form__input"
              placeholder="Поиск по ключевому слову"
              type="text"
            />
            <button className="search-form__btn">Искать</button>
          </form>
        </div>
         <div className="header__account">
          <a className="header__acconut-link" href="#">
            <img className="header__account-img" src="images/account.png" />
          </a>
         </div>
      </div>
    </div>
  </header>
  )
}
