const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

const apiKey = "b947235f7bf13a6bcad6afa6e8e53d2d";
const baseUrl = "https://api.themoviedb.org/3/movie/popular";
const numberOfPages = 5;
let popularMovies = [];

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const fetchPopularMovies = async (page) => {
  try {
    const response = await fetch(`${baseUrl}?api_key=${apiKey}&page=${page}`);
    const data = await response.json();
    return data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: movie.poster_path,
      overview: movie.overview,
    }));
  } catch (error) {
    console.error(`Failed to fetch page ${page}:`, error);
    return [];
  }
};

const getTop100PopularMovies = async () => {
  for (let page = 1; page <= numberOfPages; page++) {
    const movies = await fetchPopularMovies(page);
    popularMovies = popularMovies.concat(movies);
  }
  console.log(`Retrieved ${popularMovies.length} popular movies.`);
};

app.get("/", (req, res) => {
  res.json(popularMovies);
});

getTop100PopularMovies();
