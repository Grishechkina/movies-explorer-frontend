function AboutProject() {
  return (
    <section className="about-project" id="aboutProject">
      <h2 className="about-project__header">О проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__subheader">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__subheader">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__scale" >
        <div className="about-project__scale-back">
          <div className="about-project__ceil">1 неделя</div>
          <p className="about-project__caption">Back-end</p>
        </div>
        <div className="about-project__scale-front">
          <div className="about-project__ceil about-project__ceil_gray">4 неделя</div>
          <p className="about-project__caption">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;