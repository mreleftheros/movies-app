import movies from "./movies";

class Ui {
  constructor() {
    this.main = document.getElementById("main");
    this.moviesList = document.getElementById("moviesList");
    this.logo = document.getElementById("logo");
    this.arrows = document.getElementById("arrows");
    this.page = document.getElementById("page");
  }
  init() {
    this.logo.addEventListener("click", () => movies.init());
    this.arrows.addEventListener("click", e => handleArrowsClick(e));
  }
  renderMovies(data) {
    const fragment = new DocumentFragment();

    data.results.forEach(result => {
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

      fragment.appendChild(movieElement);
    })
    
    this.moviesList.appendChild(fragment);
    this.updateArrows(data.page, data.total_pages);
  }
  updateArrows(page, total) {
    this.arrows.classList.add("active");

    let html = `${page} of ${total}`;

    this.page.innerHTML = html;
  }
}

export default new Ui();