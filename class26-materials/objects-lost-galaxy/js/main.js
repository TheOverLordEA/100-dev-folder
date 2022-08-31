//Create a bento object that has four properties and three methods

const bento = {};

bento.rice = "white";

bento.sauce = "chilly";

bento.vegtable = "oniion";
bento.tofu = "allow";

bento.fryTofu = function () {
  return (this.tofu = "smoked");
};

bento.addSauce = function () {
  return (this.sauce += "lavaa");
};

bento.changeGreens = function () {
  return (this.vegtable = "gokus");
};
