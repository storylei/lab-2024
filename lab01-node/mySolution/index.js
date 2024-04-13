// import Film from './film';
// import FilmLibrary from './filmLibrary';
// import dayjs from 'dayjs';

const dayjs = require('dayjs');
const Film = require('./film').default;
const FilmLibrary = require('./filmLibrary').default;

const fLib = new FilmLibrary();

// Id: 1, Title: Pulp Fiction, Favorite: true, Watch date: March 10, 2024, Score: 5, User: 1
// Id: 2, Title: 21 Grams, Favorite: true, Watch date: March 17, 2024, Score: 4, User: 1
// Id: 3, Title: Star Wars, Favorite: false, Watch date: null, Score: 0, User: 1
// Id: 4, Title: Matrix, Favorite: false, Watch date: null, Score: 0, User: 1
// Id: 5, Title: Shrek, Favorite: false, Watch date: March 21, 2024, Score: 3, User: 1

let f = new Film(1, 'Pulp Fiction', true, new dayjs('March 10, 2024'), 5, 1);
fLib.addNewFilm(f);
f = new Film(2, '21 Grams', true, new dayjs('March 17, 2024'), 4, 1);
fLib.addNewFilm(f);
f = new Film(3, 'Star Wars', false, null, 0, 1);
fLib.addNewFilm(f);
f = new Film(4, 'Matrix', false, null, 0, 1);
fLib.addNewFilm(f);
f = new Film(5, 'Shrek', false, new dayjs('March 21, 2024'), 3, 1);
fLib.addNewFilm(f);

// fLib.showFilmLibrary();

// const list = fLib.sortByDate();
// console.log(list);

// fLib.deleteFilm(2);
// fLib.showFilmLibrary();

// fLib.resetWatchedFilms();
// fLib.showFilmLibrary();

let list = fLib.getRated();
console.log(list.length);
