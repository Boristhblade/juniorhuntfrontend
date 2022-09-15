import React from 'react'
import './Categories.scss'

export const Categories: React.FC = () => {
  return (
    <section className="services">
    <div className="container">
      <div className="services__inner">
        <ul className="services__list">
          <li className="services__item">
            <a className="services__item-link" href="#">Product Managers</a>
          </li>
          <li className="services__item">
            <a className="services__item-link" href="#">Project Managers</a>
          </li>
          <li className="services__item">
            <a className="services__item-link" href="#">UX/UI Designers</a>
          </li>
          <li className="services__item">
            <a className="services__item-link" href="#">Backend</a>
          </li>
          <li className="services__item">
            <a className="services__item-link" href="#">Frontend</a>
          </li>
          <li className="services__item">
            <a className="services__item-link" href="#">Marketing</a>
          </li>
          <li className="services__item">
            <a className="services__item-link" href="#">QA</a>
          </li>
        </ul>
      </div>
      <hr className="services__line" />
    </div>
  </section>
  )
}
