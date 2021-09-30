import movies from "./movies";

class Ui {
  constructor() {
    this.main = document.getElementById("main");
    this.moviesList = document.getElementById("moviesList");
    this.logo = document.getElementById("logo");
    this.arrows = document.getElementById("arrows");
    this.page = document.getElementById("page");
    this.left = document.getElementById("left");
    this.right = document.getElementById("right");
  }
  init() {
    this.logo.addEventListener("click", () => movies.init());
    this.arrows.addEventListener("click", e => this.handleArrowsClick(e));
  }
  renderMovies(data) {
    this.moviesList.innerHTML = ""; // clear UI

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
    this.updateArrows();
  }
  updateArrows() {
    this.arrows.classList.add("active");

    if (movies.page === 1) {
      this.left.classList.add("hide");
    }
    else {
      this.left.classList.remove("hide");
    }

    if (movies.page === movies.totalPages) {
      this.right.classList.add("hide");
    }
    else {
      this.right.classList.remove("hide");
    }

    let html = `${movies.page} of ${movies.totalPages}`;

    this.page.innerHTML = html;
  }
  handleArrowsClick(e) {
    if (e.target.tagName !== "SPAN") return; // check

    if (e.target.className.includes("left")) {
      if (movies.page === 1) return; // check

      movies.page--;
      return movies.getPopularMovies();
    }
    else if (e.target.className.includes("right")) {
      if (movies.page === movies.totalPages) return; // check

      movies.page++;
      return movies.getPopularMovies();
    }
  }
}

export default new Ui();