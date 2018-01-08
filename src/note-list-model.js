(function(exports) {
  var List = function(){
    this.notes = [];
  };

  List.prototype.addNote = function(note){
    if(note instanceof Note) {
      this.notes.push(note);
    }
  };

  exports.List = List;
})(this);
