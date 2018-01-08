function testInitializeEmptyList(){
  var list = new List();
  assert.isTrue(list.notes.length === 0, "List initialises empty");
};

function testAddNoteToList(){
  var list = new List();
  var note = new Note();
  list.addNote(note);
  assert.isTrue(list.notes[0] === note, "Add a note to the list");
};

function testOnlyNotesAllowed(){
  var list = new List();
  list.addNote("hello");
  assert.isTrue(list.notes[0] !== "hello", "Cannot add a non-note object to the list");
};




// -----------------------------
// calling the test functions

testInitializeEmptyList();
testAddNoteToList();
testOnlyNotesAllowed();
