//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetFlix {
  constructor(movie, brandNew, old) {
    this.movie = movie;
    this.brandNew = brandNew;
    this.old = old;
  }

  findMovie() {
    console.log(`${this.movie}`);
  }
}
