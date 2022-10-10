import { useState, useEffect } from 'react';

function MoviesCard({ movie, isOpenSavedMovies, handleCardClick }) {

	const [durationTitle, setDurationTitle] = useState('')

	useEffect(() => {
		const hours = Math.trunc(movie.duration / 60)
		const minutes = movie.duration % 60
		hours > 0 ? setDurationTitle(hours + 'ч. ' + minutes + ' м.') : setDurationTitle(minutes + ' м.')
	}, [movie])

	function onCardClick(e) {
		handleCardClick(e, movie)
	}

	return (
		<div className="card">
			<a className="card__link link" href={movie.trailerLink} target="_blank" rel="noreferrer">
				<img src={movie.image} className="card__img" alt={`Постер фильма ${movie.nameRU}`} />
			</a>
			<div className="card__info">
				<div className="card__desc">
					<h3 className="card__title">{movie.nameRU}</h3>
					<button type="button" className={`btn card__button${movie.isLiked ? ' card__button_saved' : ''}${isOpenSavedMovies ? ' card__button_deleted' : ''}`}
						onClick={onCardClick}></button>
				</div>
				<p className="card__duration">{durationTitle}</p>
			</div>

		</div>
	);
}

export default MoviesCard;