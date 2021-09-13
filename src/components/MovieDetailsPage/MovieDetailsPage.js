import { useState, useEffect } from "react";
import { NavLink, Route, useRouteMatch, useParams } from "react-router-dom";
import { fetchMovieById } from "servises/moviesApi";
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import ButtonGoBack from "components/ButtonGoBack";
import s from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
    const { movieId } = useParams();
    const { url } = useRouteMatch();
    const [movie, setMovie] = useState(null);

        useEffect(() => {
            fetchMovieById(movieId)
                .then(film => {
                    setMovie(film);
                    console.log(document.body);
        });
        }, [movieId]);

    return (
        <>
            {movie &&
                <>
                    <ButtonGoBack />
                    <div className={s.MovieDetailsPage}>
                        {movie.poster_path
                            ? (<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={s.MovieDetailsPageImage} />)
                            : (<img src="http://placehold.it/432x648/000000/FFFFFF/?text=There+is+no+poster" alt={movie.name} />)}
                        <div className={s.description}>
                            <h2 className={s.title}>{movie.title} ({movie.release_date})</h2>
                            <p>User Score : {movie.vote_average*10}% </p>
                            <h3 className={s.title}>Overview</h3>
                            <p>{movie.overview}</p>
                            <h3 className={s.title}>Genres</h3>
                            <ul>{movie.genres.map(genre =>
                                <li className={s.genre} key={genre.id}>{genre.name}</li>)}
                            </ul>
                            <div>
                                <h3 className={s.title}>Additional information</h3>
                                <p><NavLink to={`${url}/cast`}>Cast</NavLink></p>
                                <p><NavLink to={`${url}/reviews`} >Reviews</NavLink></p>
                            </div>
                        </div>
                    </div>

                    
                    <div>
                        <Route path={`${url}/cast`}>
                            <Cast movieId={movieId} />
                        </Route>
                        <Route path={`${url}/reviews`}>
                            <Reviews movieId={movieId} />
                        </Route>
                    </div>
                </>
            }
        </>
    );
}

export default MovieDetailsPage;