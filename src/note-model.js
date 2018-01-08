(function(exports) {
  var Note = function(text = 'My favourite language is Javascript'){
    this.text = text;
  };

  Note.prototype.readnote = function(){
    return this.text;
  };

exports.Note = Note;
})(this);
