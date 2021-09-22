import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul className={s.MovieList}>
            {movies.map(movie => (
                <li className={s.MovieListItem} key={movie.id}>
                    <Link to={{
                        pathname: `/movies/${movie.id}`,
                        state: {from: location}
                    }} id={movie.id} className={s.MovieListItemUrl}>
                        <div className={s.MovieListItemImageWrapper}>
                            {movie.poster_path
                                ? (<img src={`https://image.tmdb.org/t/p/w500${ movie.poster_path }`} alt={movie.title} className={s.MovieListItemImage} />)
                                : (<img src="http://placehold.it/432x648/000000/FFFFFF/?text=There+is+no+poster" alt={movie.name} />)}
                            <div className={s.MovieListItemOverlay}>
                                <p className={s.MovieListItemOverlayDescription}>{movie.title}</p>
                            </div>
                    </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(object).isRequired,
}

export default MovieList;