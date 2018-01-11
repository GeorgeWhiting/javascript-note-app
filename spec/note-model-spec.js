var testList = [
function testInitializesWithDefault(){
  var note = new Note();
  assert.isTrue(note.text === 'My favourite language is Javascript', "Initialises with a default note")
},

function testInitializesWithText(){
  var note = new Note('This is a new note');
  assert.isTrue(note.text === 'This is a new note', "Initialises with a custom note")
},

function testReturnsNoteText(){
  var note = new Note();
  assert.isTrue(note.text === note.readNote(), "Returns the content of the note");
},

function testNoteID(){
  // NoteId.prototype.getId = function(){
  //   return 0;
  // };
  var note = new Note();
  //console.log(note.id);
  assert.isTrue(note.id === 0, 'Assigns each note a unique ID');
  // NoteId.prototype.getId = function(){
  //   return this.id;
  // };
}
]

// -----------------------------

for(var i=0;i<testList.length;i++) {
NoteId.prototype.init();
  testList[i]();
}

// testInitializesWithDefault();
// testInitializesWithText();
// testReturnsNoteText();
// testNoteID();
