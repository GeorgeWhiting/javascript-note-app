function testReturnNoteHTML(){
  var FakeNote = function(){
  };
  FakeNote.prototype.readNote = function(){
    return "A note";
  };

  var noteView = new NoteView(new FakeNote);
  assert.isTrue(noteView.returnNoteHTML() === "<div>A note</div>", "ReturnNoteHTML returns html for the text of a given note");
};

// -----------------------------

testReturnNoteHTML();
