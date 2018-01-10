function testReturnNoteHTML(){
  var note = new Note("A note");
  var noteView = new NoteView(note);
  assert.isTrue(noteView.returnNoteHTML() === "<div>A note</div>", "ReturnNoteHTML returns html for the text of a given note");
};

// -----------------------------

testReturnNoteHTML();
