export const elements = {
  searchForm: document.getElementById("form-search"),
  searchInput: document.querySelector("#txt-keyword"),
  movieListHeader: document.querySelector("#movie-list-header"),
  movieList: document.querySelector("#movie-list"),
  movieListContainer: document.querySelector("#movie-list-container"),
  movieDetails: document.querySelector("#movie-details"),
  movieDetailsContainer: document.querySelector("#movie-details-container"),
  movieDetailsClose: document.querySelector("#movie-details-close"),
};
export const image_size = {
  backdrop_sizes: ["w300", "w780", "w1280", "original"],
  logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
  poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  profile_sizes: ["w45", "w185", "h632", "original"],
  still_sizes: ["w92", "w185", "w300", "original"],
};
export const renderLoader = (parent) => {
  const loader = `
      <div class="nb-spinner"></div>
`;
  parent.insertAdjacentHTML("beforebegin", loader);
};
export const clearLoader = (parent) => {
  const loader = parent.previousElementSibling;
  if (loader) {
    loader.parentNode.removeChild(loader);
  }
};
