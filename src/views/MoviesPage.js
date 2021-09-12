import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../components/Searchbar';
import MovieList from 'components/MovieList';
import ButtonLoadMore from 'components/ButtonLoadMore';
import { fetchSearchingMovies } from '../servises/moviesApi';

function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    // const [error, setError] = useState(null);
    // const [pages, setPages] = useState(0);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [status, setStatus] = useState('idle');

    const history = useHistory();
    
    useEffect(() => {
        if (query === '') {
            setQuery(history.location.search.slice(7, history.location.search.length));
        } else {
            fetchSearchingMovies(query).then(movies => {
                if (movies.total_results === 0) {
                    throw new Error(`Nothing with name ${query} was not found`);
                };
                setMovies([...movies.results]);
                history.push(`?query=${query}`);
            });
        }
    }, [history, query]);

    const getQuery = query => {
        setQuery(query);
    }

    // const autoScroll = () => {
    //     window.scrollTo({
    //         top: document.documentElement.scrollHeight,
    //         behavior: 'smooth',
    //     });
    // };
    
    return (
        <>
            <Searchbar onSubmit={getQuery} />
            {movies.length === 0
                ? <h1>Start to search</h1>
                : <MovieList movies={movies} />
            }
            <ButtonLoadMore />
            <ToastContainer />
        </>
    )
}

export default MoviesPage;