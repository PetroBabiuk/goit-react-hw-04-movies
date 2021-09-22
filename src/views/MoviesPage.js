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
    const [currentPage, setCurrentPage] = useState(1);

    const history = useHistory();
    
    useEffect(() => {
        if (query === '') {
            setQuery(history.location.search.slice(7, history.location.search.length));
        } else {
            fetchSearchingMovies(query, currentPage).then(movies => {
                if (movies.total_results === 0) {
                    throw new Error(`Nothing with name ${query} was not found`);
                };
                setMovies(prevMovies => [...prevMovies, ...movies.results]);
                history.push(`?query=${query}`);
            });
        }
    }, [currentPage, history, query]);

    const getQuery = query => {
        setQuery(prevQuery => {
            if (prevQuery !== query) {
                setMovies([]);
                setCurrentPage(1);
                return (query);
            }
        });
    }
    
    return (
        <>
            <Searchbar onSubmit={getQuery} />
            {movies.length === 0
                ? <h1>Start to search</h1>
                : <>
                    <MovieList movies={movies} />
                    <ButtonLoadMore onClick={() => setCurrentPage(prevPage => prevPage + 1)}/>
                </>
            }
            <ToastContainer />
        </>
    )
}

export default MoviesPage;