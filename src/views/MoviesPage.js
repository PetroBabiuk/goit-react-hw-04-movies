import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../components/Searchbar';
import { fetchSearchingMovies } from '../servises/moviesApi';

function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        if (query) {
            fetchSearchingMovies(query).then(movies => {
                // console.log(movies);
                if (movies.total_results === 0) {
                    throw new Error(`Nothing with name ${query} was not found`);
                };
                setMovies([...movies.results]);
            });
        }
    }, [query]);

    const getQuery = query => {
        setQuery(query);
    };
    
    return (
        <>
            <Searchbar onSubmit={getQuery} />
            {movies.length === 0
                ? <h1>Start to search</h1>
                : (<ul className="MovieList">
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} id={movie.id}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>)
            }
            
            <ToastContainer />
        </>
    )
}

export default MoviesPage;