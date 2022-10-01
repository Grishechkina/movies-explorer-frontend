function AboutMe() {
  return (
    <section className="about-me" id="aboutMe">
      <h2 className="about-me__header">Студентка</h2>
      <div className="about-me__info">
        <div className="about-me__text">
          <h2 className="about-me__name">Марина</h2>
          <p className="about-me__about">Фронтенд-разработчица, 22 года</p>
          <p className="about-me__desc">
            Я родилась в Казахстане, но уже 12 лет живу в Москве, окончила Московский Авиаионный Институт по направлению "Прикладная математика и информатика".
            Я увлекаюсь рисованием по стеклу, тетрисом и просмотром сериалов. Работаю фронтендером уже 2 года. В моей копилке коммерческой разработки три проекта с разным стеком технологий: Angular + Rxjs + TypeScript, React + TypeScript, JS + JQuery.
            Для того чтобы систематизировать знания, полученные на работе, и подтянуть верстку прошла курс Яндекс Практикум.
          </p>
          <div className="about-me__links">
            <a href="https://github.com/Grishechkina" target="_blank" rel="noreferrer" className="about-me__link link">Github</a>
            <a href="https://t.me/summarin" target="_blank" rel="noreferrer" className="about-me__link link">Telegram</a>
          </div>
        </div>
        <div className="about-me__img"></div>
      </div>
    </section>
  )
}

export default AboutMe;