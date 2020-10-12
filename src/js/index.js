// api: f3d5fe5d8c6cd22ccb0b939329406f40
// url: https://api.themoviedb.org/3
// https://api.themoviedb.org/3/search/movie?api_key=f3d5fe5d8c6cd22ccb0b939329406f40&language=en-US&query=abc&page=1&include_adult=false

import Search from './models/Search.js';
import { elements, renderLoader, clearLoader } from './base.js';
import * as searchView from './views/seachView';
import * as movieView from './views/movieView';
import { Movie } from './models/Movie';

const state = {};

//search controller
const searchController = async () => {
  const keyword = elements.searchInput.value;

  if (keyword) {
    state.search = new Search(keyword);
    searchView.clearInput();
    searchView.clearResults();

    renderLoader(elements.movieListContainer);
    await state.search.getResults();

    searchView.displayResults(keyword, state.search.data.results);

    setTimeout(() => {
      clearLoader(elements.movieListContainer);
    }, 1000);
  } else {
    alert('Input gir.');
  }
};

const search = new Search('abc');
console.log(search);
search.getResults();

elements.searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form Submit');
  searchController();
});

//movie controller
const movieController = async () => {
  const id = window.location.hash.replace('#', '');
  if (id) {
    state.movie = new Movie(id);
    renderLoader(elements.movieDetailsContainer);
    await state.movie.getMovie();
    console.log(state.movie.data);
    movieView.backToTop();
    movieView.displayMovie(state.movie.data);
    setTimeout(() => {
      clearLoader(elements.movieDetailsContainer);
    }, 1000);
  }
};

window.addEventListener('hashchange', movieController);
elements.movieDetailsClose.addEventListener('click', movieView.closeDetails);
