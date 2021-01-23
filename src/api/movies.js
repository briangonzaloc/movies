export const getRecomendedMovies = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`);
}

export const searchMovies = query => {
  return fetch(`${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&query=${query}`);
}