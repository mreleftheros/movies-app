import ui from "./ui";
import movies from "./movies";

const init = () => {
  movies.getPopularMovies();
};

document.addEventListener("DOMContentLoaded", init);