import React from 'react'
import './Cards.scss'

export const Cards: React.FC = () => {
  return (
    <section className="cards">
      <div className="container">
        <div className="cards__inner">
          <aside className="cards-side">
            <div className="cards-side__box">
              <h3 className="cards-side__title">Зарплатная вилка</h3>
              <input type="range" min="0" max="100" step="1" value="50" />
            </div>
            <div className="cards-side__box">
              <h3 className="cards-side__title cards-side__title--active">Hard skills</h3>
            </div>
            <div className="cards-side__box">
              <h3 className="cards-side__title">Tools</h3>
            </div>
            <div className="cards-side__box">
              <h3 className="cards-side__title">Soft skills</h3>
            </div>
          </aside>

          <div className="cards-content"></div>
        </div>
      </div>
    </section>
  )
}
