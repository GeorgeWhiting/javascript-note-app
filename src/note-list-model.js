(function(exports) {
  var List = function(){
    this.notes = [];
  };

  List.prototype.addNote = function(note){
    this.notes.push(note);
  };

  List.prototype.returnAllNotes = function(){
    return this.notes;
  };

  List.prototype.createAndAdd = function(text){
    var note = new Note(text);
    this.notes.push(note);
  };

  exports.List = List;
})(this);
