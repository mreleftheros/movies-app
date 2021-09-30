class Movies {
  constructor() {
    this.movieBase = "https://api.themoviedb.org/3/";
    this.params;
    this.movieId;
    this.key = "713bdecf864afbdad8aa012a5d658993";
    this.query = `?api_key=${this.key}&language=en-US`;
  }
}