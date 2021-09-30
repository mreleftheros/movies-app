import movies from "./movies";

class Ui {
  constructor() {
    this.moviesList = document.getElementById("moviesList")
  }
  renderMovie(result) {
    this.moviesList.innerHTML = "";

    // console.log(result);
  }
}

export default new Ui();