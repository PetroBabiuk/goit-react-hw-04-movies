import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingToday } from '../servises/moviesApi';

function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingToday().then(movies => setMovies(movies.results));
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            <ul>
                {movies && movies.map(movie =>
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} id={movie.id}>{movie.title}</Link>
                    </li>)}
            </ul>
        </>
    );
}

export default HomePage;