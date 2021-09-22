import { useState, useEffect } from "react";
import { fetchMovieReviews } from "servises/moviesApi";
import s from './Reviews.module.css';


function Reviews({ movieId }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(reviews => {
            if (reviews.results !== []) {
                setReviews(reviews.results);
            }
        });
        }, [movieId]);

    return (
        <>
            {reviews.length === 0
                ? <p>We don't have any reviews for this movie</p>
                : (<ul className={s.Reviews}>
                    {reviews.map(review => <li key={review.id}>
                        <h4>{review.author}</h4>
                        <p>{review.content}</p>
                    </li>)}
                </ul>)
            }
        </>
    )
}

export default Reviews;