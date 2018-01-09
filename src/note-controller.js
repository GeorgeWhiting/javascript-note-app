(function(exports){

  var Controller = function(list = new List()){
    this.list = list
    this.list.createAndAdd("Fav drink: pesto");
     this.view = new View(list);
     document.getElementById("app").innerHTML = this.view.returnHTML();
  };

  exports.Controller = Controller;

})(this);

window.onload = function() {
  controller = new Controller();
};
