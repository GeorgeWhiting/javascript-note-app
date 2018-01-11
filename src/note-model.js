(function(exports) {

  NoteId.prototype.init();

  var Note = function(text = 'My favourite language is Javascript'){
    this.text = text;
    this.id = NoteId.prototype.getId();
    NoteId.prototype.increment();
  };

  Note.prototype.readNote = function(){
    return this.text;
  };

  Note.prototype.getId = function(){
    return this.id;
  };

exports.Note = Note;
})(this);
