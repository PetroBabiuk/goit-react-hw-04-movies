import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchMovieReviews } from "servises/moviesApi";


function Reviews({ movieId }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(reviews => {
            if (reviews.results !== []) {
                console.log(reviews.results);
                setReviews(reviews.results);
            }
        });
        }, [movieId]);

    return (
        <>
            {reviews.length === 0
                ? <p>We don't have any reviews for this movie</p>
                : (<ul>
                    {reviews.map(review => <li>
                        <h4>{review.author}</h4>
                        <p>{review.content}</p>
                </li>)}
                </ul>)
            }
        </>
    )
}

export default Reviews;