import ui from "./ui";

class Movies {
  constructor() {
    this.base = "https://api.themoviedb.org/3/";
    this.key = "713bdecf864afbdad8aa012a5d658993";
    this.query = `?api_key=${this.key}&language=en-US`;
    this.genres;
    this.page = 1;
    this.totalPages;
    this.currentSearch;
    this.currentMovie;
  }
  async init() {
    this.page = 1;
    this.totalPages = null;
    this.currentMovie = null;
    this.currentSearch = null;
    this.genres = null;

    await this.setGenres();
    await this.getPopularMovies();
  }
  async setGenres() {
    const urbBase = this.base + "genre/movie/list";
    const query = this.query;
    const url = urbBase + query;

    const response = await fetch(url);
    const data = await response.json();

    return this.genres = [...data.genres];
  }
  async getPopularMovies() {
    this.currentSearch = "popular";
    const urlBase = this.base + "movie/popular";
    const query = this.query + `&page=${this.page}`;
    const url = urlBase + query;

    const response = await fetch(url);
    const data = await response.json();

    this.totalPages = data.total_pages;

    return ui.renderMovies(data);
  }
  async searchMovie(movie) {
    this.currentSearch = "search";
    this.currentMovie = movie;
    const urlBase = this.base + "search/movie";
    const query = this.query + `&query=${movie}&page=${this.page}&include_adult=false`;
    const url = urlBase + query;

    const res = await fetch(url);
    const data = await res.json();

    this.totalPages = data.total_pages;

    return ui.renderMovies(data);
  }
  getNext() {
    if (this.currentSearch === "popular") {
      return this.getPopularMovies();
    } else if (this.currentSearch === "search") {
      return this.searchMovie(this.currentMovie);
    }
  }
}

export default new Movies();