// ▪ A unique numerical id (mandatory)
// ▪ A title (mandatory)
// ▪ A Boolean value to represent whether the film is among the person’s favorites (default value: false)
// ▪ A date corresponding to the date when the person watched the film (optional)
// ▪ Anumerical value between 1 and 5 to represent the rating that the person has given to the film after watching it (optional)
// ▪ A numerical id representing the person (mandatory, default to 1).

function Film(id, title, favorite, date, score, uid) {
  this.id = id;
  this.title = title;
  this.favorite = favorite;
  this.date = date;
  this.score = score;
  this.uid = uid;

  // Id: 1, Title: Pulp Fiction, Favorite: true, Watch date: March 10, 2024, Score: 5, User: 1
  this.showFilm = () => {
    console.log(
      `Id: ${this.id}, Title: ${this.title}, Favorite: ${this.favorite}, Watch date: ${this.date}, Score: ${this.score}, User: ${this.uid}`
    );
  };
}

// export default Film;
exports.default = Film;
