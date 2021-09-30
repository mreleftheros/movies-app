import ui from "./ui";
import movies from "./movies";

const init = () => {
  movies.init();
  ui.init();
};

document.addEventListener("DOMContentLoaded", init);