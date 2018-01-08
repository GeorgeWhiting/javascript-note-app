(function(exports) {
  var List = function(){
    this.notes = [];
  };

  List.prototype.addNote = function(note){
    if(note instanceof Note) {
      this.notes.push(note);
    }
  };

  List.prototype.returnAllNotes = function(){
    return this.notes;
  };

  exports.List = List;
})(this);
