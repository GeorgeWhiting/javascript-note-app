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

var pageUpdater = function() {
  window.addEventListener("hashchange", showNoteCurrentPage);
};

var showNoteCurrentPage = function(list) {
  var id = getNoteFromUrl(window.location);
  var note = controller.list.getNoteFromId(parseInt(id.split("/")[1]));
  displayHTMLForNote(note);
};

var getNoteFromUrl = function(location) {
  return location.hash.split("#")[1];
};

var displayHTMLForNote = function(note) {
  noteView = new NoteView(note)
  document.getElementById("app").innerHTML = noteView.returnNoteHTML();
};

pageUpdater();

 // window.onload = function() {
  controller = new Controller();
  // controller.list.createAndAdd("Fav drink: pesto");
  controller.list.createAndAdd("hello");
  controller.printList("app");
// };
