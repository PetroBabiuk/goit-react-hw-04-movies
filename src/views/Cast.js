import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchMovieCast } from "servises/moviesApi";


function Cast({ movieId }) {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetchMovieCast(movieId).then(result => setActors(result.cast));
        }, [movieId]);

    return (
        <>
             {actors.length === 0
                ? <p>We don't have any information about actors for this movie</p>
                : (<ul>
                    {actors.map(actor =>
                        <li key={actor.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                            <p>{actor.name}</p>
                        </li>
                    )}
                </ul>)
            }
        </>
    )
}

export default Cast;