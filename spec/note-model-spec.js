function testInitializesWithDefault(){
  var note = new Note();
  assert.isTrue(note.text === 'My favourite language is Javascript', "Initialises with a default note")
};

function testInitializesWithText(){
  var note = new Note('This is a new note');
  assert.isTrue(note.text === 'This is a new note', "Initialises with a custom note")
};

function testReturnsNoteText(){
  var note = new Note();
  assert.isTrue(note.text === note.readNote(), "Returns the content of the note");
};



// -----------------------------

testInitializesWithDefault();
testInitializesWithText();
testReturnsNoteText();
