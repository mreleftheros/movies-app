import ui from "./ui";
import movies from "./movies";

const init = () => {
  movies.init();
};

document.addEventListener("DOMContentLoaded", init);