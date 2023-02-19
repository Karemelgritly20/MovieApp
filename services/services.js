import axios from 'axios';


const apiUrl = 'https://api.themoviedb.org/3'

const apiKey = 'api_key=71afa63a366c7b0850c982f395c51f54'

// get popular movies
export const getPopularMovies = async () => {
    const respo = await axios.get(`${apiUrl}/movie/popular?${apiKey}`)
    return respo.data.results
  };

  // get upcoming movies
  export const getUpcomingMovies = async () => {
    const respo = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`)
    return respo.data.results
  };


  // popular tv series

  export const getPopularTvSeries = async () => {
    const respo = await axios.get(`${apiUrl}/tv/popular?${apiKey}`)
    return respo.data.results
  };

  // getMovie

  export const getMovie = async id => {
    const respo = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`)
    return respo.data
  };

  // getVideo 
  
  export const getVideo = async id => {
    const respo = await axios.get(`${apiUrl}/movie/${id}/videos?${apiKey}`)
    return respo.data
  };

  // topRated

  export const getTopRated = async () => {
    const respo = await axios.get(`${apiUrl}/movie/top_rated?${apiKey}`)
    return respo.data.results
  };





  