import { Link } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
    return (
        <ul className={s.MovieList}>
            {movies.map(movie => (
                <li className={s.MovieListItem} key={movie.id}>
                    <Link to={`/movies/${movie.id}`} id={movie.id} className={s.MovieListItemUrl}>
                        <div className={s.MovieListItemImageWrapper}>
                            {movie.poster_path
                                ? (<img src={`https://image.tmdb.org/t/p/w500${ movie.poster_path }`} alt={movie.title} className={s.MovieListItemImage} />)
                                : (<img src="http://placehold.it/432x648/000000/FFFFFF/?text=There+is+no+poster" alt={movie.name} />)}
                            <div className={s.MovieListItemOverlay}>
                                <p className={s.MovieListItemOverlayDescription}>{movie.title}</p>
                            </div>
                    </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(object).isRequired,
}

export default MovieList;


// ---------------------------------------------------------------------------------------------------------
// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Loader from 'react-loader-spinner';
// import Button from 'components/Button';
// import ImageGalleryItem from '../ImageGalleryItem';
// import picturesApi from '../../servises/picturesApi';

// const ImageGallery = ({ query, onClick }) => {
//     const [images, setImages] = useState([]);
    // const [error, setError] = useState(null);
    // const [pages, setPages] = useState(0);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [status, setStatus] = useState('idle');
//     const [searshQuery, setSearshQuery] = useState('');

    // const autoScroll = () => {
    //     window.scrollTo({
    //         top: document.documentElement.scrollHeight,
    //         behavior: 'smooth',
    //     });
    // };

//     const resetPage = () => {
//         setCurrentPage(1);
//         setImages([]);
//     };

//     useEffect(() => {
//         if (query) {
//             resetPage();
//             setStatus('pending');
//             picturesApi(query, 1).then(images => {
//                 if (images.totalHits === 0) {
//                     throw new Error(`Nothing with name ${query} was not found`);
//                 };
//                 setSearshQuery(query);
//                 setImages([...images.hits]);
//                 setStatus('resolved');
//                 setPages(images.totalHits / 12);
//                 autoScroll();
//             }).catch(error => {
//                 setError(error);
//                 setStatus('rejected');
//             } );
//         }
//     }, [query]);

//     useEffect(() => {
        
//         if ( currentPage > 1 && query === searshQuery) {
//             setStatus('another-pending');
//             picturesApi(query, currentPage).then(images => {
//                 setImages(prevImages => ([...prevImages, ...images.hits]));
//                 setStatus('resolved');
//                 autoScroll();
//             }).catch(error => {
//                 setError(error);
//                 setStatus('rejected');
//             });
//         }
//     }, [currentPage, query, searshQuery]);

//     if (status === 'idle') {
//             return (
//                 <h1>Please, enter something</h1>
//             );
//         }

//         if (status === 'pending') {
//             return (
//                 <Loader
//                     type="ThreeDots"
//                     color="#3f51b5"
//                     height={280}
//                     width={280}
//                 />
//             );
//         }

//         if (status === 'another-pending') {
//             return (
//                 <>
//                     <ul className="ImageGallery">
//                         <ImageGalleryItem images={images} onClick={onClick} />
//                     </ul>
//                     <Loader
//                         type="ThreeDots"
//                         color="#3f51b5"
//                         height={280}
//                         width={280}
//                     />
//                 </>
//             );
//         }

//         if (status === 'rejected') {
//             return (
//                 <h1>{error.message}</h1>
//             )
//         }

//         if (status === 'resolved') {
//             return (
//                 <>
//                     <ul className="ImageGallery">
//                         <ImageGalleryItem images={images} onClick={onClick} />
//                     </ul>
//                     {pages >= currentPage ?
//                         <Button onClick={() => setCurrentPage(prevPage => prevPage + 1)} />
//                         : <></>}
//                 </>
//             );
//     };
// }

// ImageGallery.propTypes = {
//     query: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// };

// export default ImageGallery;