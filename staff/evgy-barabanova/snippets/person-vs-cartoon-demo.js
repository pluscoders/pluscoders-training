/**
 * Мультфильм.
 * @param {string} title - Name of the cartoon
 * @param {number} year - When it released (1990)
 * @param {boolean} forChildren - true/false
 * @param {string} beginning - Several words from the beginning of the cartoon
 */
 function Cartoon(title, year, forChildren = true, beginning = 'Long, long ago...', studioLogo) {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
  this.studioLogo = studioLogo;
}

Cartoon.prototype.getDescription = function () {
  return Object.entries(this);
};

Cartoon.prototype.play = function () {
  return [
    this.studio,
    this.studioLogo,
    this.title,
    this.beginning,
  ].join('\n');
};

// Мульт студии Walt Disney.

function DisneyCartoon(title, year, forChildren = true, beginning = 'Long, long ago in a faraway land...', studioLogo = '🏰🌠') {
  Cartoon.call(this, title, year, forChildren, beginning, studioLogo)
  this.studio = 'Walt Disney';
}


Object.setPrototypeOf(DisneyCartoon.prototype, Cartoon.prototype);

//Мульт студии DreamWorks.

function DreamWorksCartoon(title, year, forChildren = true, beginning = 'Long, long ago in a faraway land...', studioLogo = '🌙') {
  Cartoon.call(this, title, year, forChildren, beginning, studioLogo);
  this.studio = 'DreamWorks';
}

Object.setPrototypeOf(DreamWorksCartoon.prototype, Cartoon.prototype);

/**
 * Человек.
 * @param {string} name
 */
function Person(name, watchedMovies) {
  this.name = name;
  this.watchedMovies = watchedMovies;
  this.watchedMovies.toString = function () {
    return watchedMovies.map((el, i) => `${i + 1} ${el.title}`).join('');
  };
}

Person.prototype.watchMovie = function (movie) {
  movie.play();
  if (!this.watchedMovies.includes(movie)) {
    this.watchedMovies.push(movie);
  }
};

// DEMO

const rapunzel = new DisneyCartoon('Rapunzel', 2010);
const frozen = new DisneyCartoon('Frozen', 2013);
const cinderella = new DisneyCartoon('Cinderella', 1920);

const evgy = new Person('Evgy', [])

evgy.watchMovie(rapunzel)
evgy.watchMovie(frozen)
evgy.watchMovie(cinderella)

console.log(evgy.watchedMovies.toString())
