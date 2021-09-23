import { useState, useEffect, lazy, Suspense } from "react";
import { NavLink, Route, useRouteMatch, useParams, useLocation } from "react-router-dom";
import { fetchMovieById } from "servises/moviesApi";
import Loader from 'react-loader-spinner';
import ButtonGoBack from '../ButtonGoBack';
import s from './MovieDetailsPage.module.css';
import notFoundImage from '../../images/keep-calm-poster-not-found.png';

const Cast = lazy(() => import('components/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() => import('components/Reviews' /* webpackChunkName: "Reviews" */));


function MovieDetailsPage() {
    const { movieId } = useParams();
    const { url } = useRouteMatch();
    const [movie, setMovie] = useState(null);
    const [pathToMovie, setPathToMovie] = useState(null);

    const location = useLocation();

    useEffect(() => {
        setPathToMovie(location.state);
    }, [location]);

    useEffect(() => {
        fetchMovieById(movieId)
            .then(film => setMovie(film))
    }, [movieId]);

    return (
        <>
            {movie &&
                <>
                    <ButtonGoBack />
                    <div className={s.MovieDetailsPage}>
                        {movie.poster_path
                            ? (<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={s.MovieDetailsPageImage} />)
                            : (<img src={notFoundImage} alt={movie.name} />)}
                        <div className={s.description}>
                            <h2 className={s.title}>{movie.title} ({movie.release_date})</h2>
                            <p>User Score : {movie.vote_average * 10}% </p>
                            <h3 className={s.title}>Overview</h3>
                            <p>{movie.overview}</p>
                            <h3 className={s.title}>Genres</h3>
                            <ul>{movie.genres.map(genre =>
                                <li className={s.genre} key={genre.id}>{genre.name}</li>)}
                            </ul>
                            <div>
                                <h3 className={s.title}>Additional information</h3>
                                <p><NavLink to={{
                                    pathname: `${url}/cast`,
                                    state: pathToMovie
                                }}
                                >Cast</NavLink></p>
                                <p><NavLink to={{
                                    pathname: `${url}/reviews`,
                                    state: pathToMovie
                                }}
                                >Reviews</NavLink></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Suspense
                            fallback={<Loader
                                type="ThreeDots"
                                color="#3f51b5"
                                height={280}
                                width={280} />}>
                            <Route path={`${url}/cast`}>
                                <Cast movieId={movieId} />
                            </Route>
                            <Route path={`${url}/reviews`}>
                                <Reviews movieId={movieId} />
                            </Route>
                        </Suspense>
                    </div>
                </>
            }
        </>
    );
}

export default MovieDetailsPage;