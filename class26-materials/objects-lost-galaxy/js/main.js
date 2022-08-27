//Create a bento object that has four properties and three methods

const bento = {};

bento.rice = "white";

bento.sauce = "chilly";

bento.vegtable = "oniion";
bento.tofu = "allow";

bento.fryTofu = function () {
  this.tofu = "smoked";
};

bento.addSauce = function () {
  this.sauce += "lavaa";
};

bento.changeGreens = function () {
  this.vegtable = "gokus";
};
