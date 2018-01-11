function testId(){
  var noteId = new NoteId
  assert.isTrue(noteId.id === 0, "Initialises with an id of 0")
};

function testIncrementId(){
  var noteId = new NoteId
  noteId.increment();
  assert.isTrue(noteId.id === 1, "Increments the id number")
};

function testGetId(){
   var noteId = new NoteId
   assert.isTrue(noteId.getId() === 0, "Gets the ID number")
}

// -----------------------------

testId();
testIncrementId();
testGetId();
