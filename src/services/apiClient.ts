import axios from "axios";


const FetchMovies = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: {
    apikey: "23774742",
    s: "",
  },
});

export default FetchMovies;
