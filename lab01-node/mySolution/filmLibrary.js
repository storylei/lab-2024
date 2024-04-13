function FilmLibrary() {
  this.filmList = [];

  this.addNewFilm = (film) => {
    this.filmList.push(film);
  };

  this.showFilmLibrary = () => {
    this.filmList.forEach((f) => f.showFilm());
  };

  this.sortByDate = () => {
    const list = [...this.filmList];
    const sorted = list.filter((f) => f.date).sort((f1, f2) => f1.date.valueOf() - f2.date.valueOf());
    const nodate = list.filter((f) => !f.date);
    return [...sorted, ...nodate];
  };

  this.deleteFilm = (fid) => {
    const index = this.filmList.findIndex((f) => f.id === fid);
    this.filmList.splice(index, 1);
  };

  this.resetWatchedFilms = () => {
    this.filmList.forEach((f) => (f.date = null));
  };

  this.getRated = () => {
    return this.filmList.filter((f) => f.score);
  };
}

// export default FilmLibrary;
exports.default = FilmLibrary;
