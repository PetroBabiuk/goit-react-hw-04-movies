const BASE_URL = "https://api.themoviedb.org/3";

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not Found'));
}

export function fetchTrendingToday(page) {
    return fetchWithErrorHandling(`${BASE_URL}/trending/movie/day?api_key=d9642dccb373084b38b1ae3b08bc851f&page=${page}`);
}

export function fetchSearchingMovies(query, page) {
    return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US&query=${query}&page=${page}&include_adult=false`);
}

export function fetchMovieById(id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US`);
}

export function fetchMovieCast(id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/credits?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US`)
}

export function fetchMovieReviews(id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/reviews?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US&page=1`)
}