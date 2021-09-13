import { useState, useEffect } from 'react';
import { fetchTrendingToday } from '../servises/moviesApi';
import MovieList from 'components/MovieList';
import ButtonLoadMore from 'components/ButtonLoadMore';

function HomePage() {
    const [movies, setMovies] = useState([]);
        // const [error, setError] = useState(null);
    // const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    // const [status, setStatus] = useState('idle');

    useEffect(() => {
        fetchTrendingToday(currentPage).then(movies => {
            // console.log(movies);
            setMovies(prevMovies => [...prevMovies, ...movies.results]);
        });
    }, [currentPage]);

    return (
        <>
            <h1>Trending today</h1>
            <MovieList movies={movies} />
            <ButtonLoadMore onClick={() => setCurrentPage(prevPage => prevPage + 1)}/>
        </>
    );
}

export default HomePage;