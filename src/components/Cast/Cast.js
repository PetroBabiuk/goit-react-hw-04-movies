import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { fetchMovieCast } from "servises/moviesApi";
import s from './Cast.module.css';

function Cast({ movieId }) {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetchMovieCast(movieId).then(result => setActors(result.cast));
        }, [movieId]);

    return (
        <>
            {actors.length === 0
                ? <p>We don't have any information about actors for this movie</p>
                : (<ul className={s.Cast}>
                    {actors.map(actor =>
                        <li key={actor.id} className={s.CastItem}>
                            {actor.profile_path
                                ? (<img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />)
                                : (<img src="http://placehold.it/200x300/000000/FFFFFF/?text=There+is+no+photo" alt={actor.name} />)}
                            <p className={s.actorName}>{actor.name}</p>
                        </li>
                    )}
                </ul>)
            }
        </>
    )
}

export default Cast;