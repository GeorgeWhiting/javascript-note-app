function testInitializeEmptyList(){
  var list = new List();
  assert.isTrue(list.notes.length === 0, "List initialises empty")
};

function testAddNoteToList(){
  var list = new List();
  var note = new Note();
  list.addNote(note);
  assert.isTrue(list.notes[0] === note, "Add a note to the list")
};





// -----------------------------
// calling the test functions

testInitializeEmptyList();
testAddNoteToList();
