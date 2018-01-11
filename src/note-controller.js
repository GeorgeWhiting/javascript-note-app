(function(exports){

  var Controller = function(list = new List(), view = new View(list)){
    this.list = list;
    this.view = view;
  };

  Controller.prototype.printList = function(elementID){
    document.getElementById(elementID).innerHTML = this.view.returnHTML();
  };

  exports.Controller = Controller;

})(this);

window.onload = function() {
  controller = new Controller();
  controller.list.createAndAdd("Fav drink: pesto");
  controller.list.createAndAdd("hello");
  controller.printList("app");
};
