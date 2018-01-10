(function(exports){

  var NoteView = function(note){
    this.note = note;
  };

  NoteView.prototype.returnNoteHTML = function(){
    return "<div>" + this.note.readNote() + "</div>";
  };

  exports.NoteView = NoteView;

})(this);
