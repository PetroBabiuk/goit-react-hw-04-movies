import { useState, useEffect } from 'react';
import { fetchTrendingToday } from '../servises/moviesApi';
import Loader from 'react-loader-spinner';
import MovieList from 'components/MovieList';
import ButtonLoadMore from 'components/ButtonLoadMore';

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchTrendingToday(currentPage).then(movies => {
            setMovies(prevMovies => [...prevMovies, ...movies.results]);
        });
    }, [currentPage]);

    return (
        <>
            <h1>Trending today</h1>
            {movies.length === 0
                ? <Loader
                    type="ThreeDots"
                    color="#3f51b5"
                    height={280}
                    width={280} />
                : <>
                    <MovieList movies={movies} />
                    <ButtonLoadMore onClick={() => setCurrentPage(prevPage => prevPage + 1)} />
                </>
            }
        </>
    );
}

export default HomePage;