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
    this.moviesList.innerHTML = "";

    console.log("result");
  }
}

export default new Ui();