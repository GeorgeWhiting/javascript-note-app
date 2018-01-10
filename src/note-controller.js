(function(exports){

  var Controller = function(list = new List()){
    this.list = list
    this.list.createAndAdd("Fav drink: pesto");
    this.list.createAndAdd("something else");

    this.view = new View(list);
  };

  Controller.prototype.printList = function(elementID){
    document.getElementById(elementID).innerHTML = this.view.returnHTML();
  };

  exports.Controller = Controller;

})(this);

window.onload = function() {
  controller = new Controller();
  controller.printList("app");
};
