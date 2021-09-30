import ui from "./ui";

class Movies {
  constructor() {
    this.base = "https://api.themoviedb.org/3/";
    this.movieId;
    this.page = 1;
    this.key = "713bdecf864afbdad8aa012a5d658993";
    this.query = `?api_key=${this.key}&language=en-US`;
  }
  async getPopularMovies() {
    const urlBase = this.base + "movie/popular";
    const query = this.query + `&page=${this.page}`;
    this.page++;
    const url = urlBase + query;

    const response = await fetch(url);
    const data = await response.json();

    return data.results.forEach(result => ui.renderMovie(result));
  }
}

export default new Movies();