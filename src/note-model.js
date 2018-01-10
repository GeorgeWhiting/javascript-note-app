(function(exports) {

  var id = 0;

  var Note = function(text = 'My favourite language is Javascript'){
    this.text = text;
    this.id = id++;
  };

  Note.prototype.readNote = function(){
    return this.text;
  };

exports.Note = Note;
})(this);
