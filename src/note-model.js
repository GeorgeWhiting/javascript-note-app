(function(exports) {

//  var noteId = new NoteId();
  NoteId.prototype.init();

  var Note = function(text = 'My favourite language is Javascript'){
    this.text = text;
    this.id = NoteId.prototype.getId();
    console.log(this.id);
    NoteId.prototype.increment();
  };

  Note.prototype.readNote = function(){
    return this.text;
  };

exports.Note = Note;
})(this);
