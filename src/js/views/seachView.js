import { elements } from "../base.js";

export const clearInput = () => {
  elements.searchInput.value = "";
};
export const clearResults = () => {
  elements.movieList.innerHTML = "";
};

export const displayResults = (keyword, data) => {
  data.forEach((movie) => {
    const html = `
    <li class="media mb-3">
    <img
      src="https://image.tmdb.org/t/p/w92/${movie.poster_path}"
      class="mr-3"
      alt="${movie.title}"
      onerror="(this.src='https://via.placeholder.com/92x138')"
    />
    <div class="media-body">
      <h5 class="mt-0 mb-1"><span class="badge badge-primary">${movie.vote_average}</span> <a href="#${movie.id}">${movie.title}</h5>
      <p>${movie.overview}</p>
    </div>
  </li>
    `;

    elements.movieListHeader.innerHTML = ` ${data.length} Results Found For ${keyword}
    `;

    elements.movieListContainer.classList.add("d-block");
    elements.movieList.insertAdjacentHTML("beforeend", html);
  });
};
