function MoviesCard({ movie, isOpenSavedMovies }) {

	return (
		<div className="card">
			<a className="card__link link" href={movie.trailerLink} target="_blank" rel="noreferrer">
				<img src={movie.image} className="card__img" alt={`Постер фильма ${movie.nameRu}`} />
			</a>
			<div className="card__info">
				<div className="card__desc">
					<h3 className="card__title">{movie.nameRU}</h3>
					<button className={`btn card__button${movie.isSaved ? ' card__button_saved' : ''}${isOpenSavedMovies ? ' card__button_deleted' : ''}`}></button>
				</div>
				<p className="card__duration">{movie.duration}</p>
			</div>

		</div>
	);
}

export default MoviesCard;