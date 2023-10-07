import axios from 'axios'

axios.defaults.params = {
    api_key: '633bf2a53a92ca11caa88cdd2de10141',
}
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovie = async () => {
    const {data} = await axios.get(`trending/movie/day`,{})
    return data.results
}

export const getDetailsMovie = async (movieId) => {
    const {data} = await axios.get(`movie/${movieId}`,{})
    // console.log('data', data)
    return data
}

export const getCreditsMovie = async (movieId) => {
    const {data} = await axios.get(`movie/${movieId}/credits`,{})
    // console.log('data', data)
    return data.cast
}

export const getReviewsMovie = async (movieId) => {
    const {data} = await axios.get(`movie/${movieId}/reviews`,{})
    // console.log('data', data.results)
    return data.results
}

export const getSearchMovie = async (query) => {
    const {data} = await axios.get(`search/movie?query=${query}&include_adult=false&language=en-US&page=1`,{})
    // console.log('data', data)
    return data.results
}