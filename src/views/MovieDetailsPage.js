import { useState, useEffect } from "react";
import { NavLink, Route, useRouteMatch, useParams } from "react-router-dom";
import { fetchMovieById } from "servises/moviesApi";
import Cast from './Cast';
import Reviews from './Reviews';

function MovieDetailsPage() {
    const { movieId } = useParams();
    const { url } = useRouteMatch();
    const [movie, setMovie] = useState(null);

        useEffect(() => {
        fetchMovieById(movieId).then(setMovie);
        }, [movieId]);

    return (
        <>
            {movie &&
            <>
                <button type="button">Go back</button>
                <div>
                    <h2>{movie.title} ({movie.release_date})</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${ movie.poster_path }`} alt={movie.title} />
                    <p>Average {movie.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres.map(genre =>
                        <span key={genre.id}>{genre.name}</span>)}
                    </p>
                </div>

                <div>
                    <h3>Additional information</h3>
                    <p><NavLink to={`${url}/cast`}>Cast</NavLink></p>
                    <p><NavLink to={`${url}/reviews`} >Reviews</NavLink></p>
                </div>
                <div>
                    <Route path={`${url}/cast`}>
                        <Cast movieId={movieId}/>
                    </Route>
                    <Route path={`${url}/reviews`}>
                        <Reviews movieId={movieId}/>
                    </Route>
                </div>
            </>
            }
        </>
    );
}

export default MovieDetailsPage;