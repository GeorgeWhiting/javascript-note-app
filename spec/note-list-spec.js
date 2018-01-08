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


function returnsNotesList(){
  var note1 = new Note("Note 1");
  var note2 = new Note("Note 2");
  var list = new List();
  list.addNote(note1);
  list.addNote(note2);
  assert.isTrue(list.returnAllNotes() === list.notes, "Returns the list of notes");
};

function testNoteCreationAndAddToList(){
  var list = new List();
  list.createAndAdd("A note");
  assert.isTrue(list.notes[0].readNote() === "A note", "Creates and adds a note to the list");

};

// -----------------------------
// calling the test functions

testInitializeEmptyList();
testAddNoteToList();
testOnlyNotesAllowed();
returnsNotesList();
testNoteCreationAndAddToList();
