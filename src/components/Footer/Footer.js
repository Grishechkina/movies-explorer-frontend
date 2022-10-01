function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__line">
        <p className="footer__year">&copy; 2022.</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link link">Яндекс.Практикум</a>
          <a href="https://github.com/Grishechkina" target="_blank" rel="noreferrer" className="footer__link link">Github</a>
        </div>
      </div>

    </footer>)
}

export default Footer;