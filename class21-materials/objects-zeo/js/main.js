//Create a stopwatch object that has four properties and three methods
const watchBe = {
  quality: "good",
  age: 2018,
  timeMinute: 10,
  timeSec: 100,

  getTime: function (timeMin, timeSec) {
    return `${this.timeMinute} ${this.timeSec}`;
  },

  getAge: function (age) {
    return this.age;
  },

  presentQuality: function (a) {
    return this.quality;
  },
};

// console.log(watchBe.presentQuality());
