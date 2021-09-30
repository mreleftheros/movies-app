import movies from "./movies";

class Ui {
  constructor() {
    this.moviesList = document.getElementById("moviesList");
    this.logo = document.getElementById("logo");
  }
  init() {
    this.logo.addEventListener("click", () => movies.init());
  }
  renderMovie(result) {
    // create movie element
    const movieElement = document.createElement("li");
    movieElement.classList.add("main__movies-list__movie");
    movieElement.setAttribute("data-id", result.id);

    let imgUrl = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;
    let year = result.release_date.split("-")[0];

    let html = `
    <figure class="main__movies-list__movie__figure">
      <img class="main__movies-list__movie__figure__img" src=${imgUrl}>
    </figure>
    
    <div class="main__movies-list__movie__details">
      <h2 class="main__movies-list__movie__details__title">${result.title}</h2>
      <div class="main__movies-list__movie__details__rating">${result.vote_average} / 10</div>
      </div>

    <p class="main__movies-list__movie__year">${year}</p>

    <p class="main__movies-list__movie__overview">${result.overview}</p>
    `;

    movieElement.innerHTML = html;

    this.moviesList.appendChild(movieElement);
  }
}

export default new Ui();