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

  List.prototype.getNoteFromId = function(id){
    for(var i = 0; i < this.notes.length; i++){
      if (this.notes[i].getId() === id){
        return this.notes[i];
      }
    }
  };

  exports.List = List;
})(this);
