import MoviesCard from "../MoviesCard/MoviesCard";
function MoviesCardList({isOpenSavedMovies}) {
  const movie = {
    _id: "63278682e04a4e4c1df02b5a",
    country: "hfg",
    director: "ttttСтивен Кайак ",
    duration: 61,
    year: "2010",
    description: "dfhfdjfjhdhjВ конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
    image: "https://lookw.ru/8/896/1476182475-switzerland-houses-467737.jpg",
    trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
    thumbnail: "https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg",
    owner: "6327834990ff29d706bc9c02",
    movieId: 3,
    nameRU: "aerrtaeetr в изгнании",
    nameEN: "arytareyaeStones in Exile"
  }
  const movieSaved = {
    _id: "63278682e04a4e4c1df02b5a",
    country: "hfg",
    director: "ttttСтивен Кайак ",
    duration: 61,
    year: "2010",
    description: "dfhfdjfjhdhjВ конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
    image: "https://lookw.ru/8/896/1476182475-switzerland-houses-467737.jpg",
    trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
    thumbnail: "https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg",
    owner: "6327834990ff29d706bc9c02",
    movieId: 3,
    nameRU: "aerrtaeetr в изгнании",
    nameEN: "arytareyaeStones in Exile",
    isSaved: true
  }
  const movies = [movie, movie, movieSaved, movie, movie, movieSaved, movie, movieSaved, movie, movie, movie, movie,]

  return (
    <div className="movies-card">
      <ul className="movies-card__list">
        {movies
          .map((item, idx) => (
            <li className="movies-card__item" key={idx}>
              <MoviesCard movie={item} isOpenSavedMovies={isOpenSavedMovies}/>
            </li>
          ))
        }
      </ul>
      <button type="button" className="btn movies-card__more-btn">Еще</button>
    </div>
  );
}

export default MoviesCardList;