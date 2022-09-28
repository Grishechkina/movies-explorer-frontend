function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>

      <a href="https://github.com/Grishechkina/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__link link">
        <p className="portfolio__text">Статичный сайт</p>
        <div className="portfolio__icon"></div>
      </a>
      <a href="https://github.com/Grishechkina/russian-travel" target="_blank" rel="noreferrer" className="portfolio__link link">
        <p className="portfolio__text">Адаптивный сайт</p>
        <div className="portfolio__icon"></div>
      </a>
      <a href="https://github.com/Grishechkina/react-mesto-api-full" target="_blank" rel="noreferrer" className="portfolio__link link">
        <p className="portfolio__text">Одностраничное приложение</p>
        <div className="portfolio__icon"></div>
      </a>
    </div>
  )
}

export default Portfolio;