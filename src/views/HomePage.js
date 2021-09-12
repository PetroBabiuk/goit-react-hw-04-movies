import { useState, useEffect } from 'react';
import { fetchTrendingToday } from '../servises/moviesApi';
import MovieList from 'components/MovieList';
import ButtonLoadMore from 'components/ButtonLoadMore';

function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingToday().then(movies => setMovies(movies.results));
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            <MovieList movies={movies} />
            <ButtonLoadMore />
        </>
    );
}

export default HomePage;