const BASE_URL = "https://api.themoviedb.org/3";
const APIKEY = "api_key=d9642dccb373084b38b1ae3b08bc851f";

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not Found'));
}

export function fetchTrendingToday() {
    return fetchWithErrorHandling(`${BASE_URL}/trending/all/day?${APIKEY}`);
}

export function fetchSearchingMovies(query) {
    return fetchWithErrorHandling(`${BASE_URL}/search/movie ? ${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`);
}

export function fetchMovieById(id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US`);
}

export function fetchMovieCredits(id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/credits?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US`)
}

export function fetchMovieReviews(id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/reviews?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US&page=1`)
}