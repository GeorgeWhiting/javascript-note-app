function testInitializeEmptyList(){
  var list = new List();
  assert.isTrue(list.notes.length === 0, "List initialises empty");
};

function testAddNoteToList(){

  var FakeNote = function(text){
    this.text = text;
  };

  var list = new List();
  var note = new FakeNote();
  list.addNote(note);
  assert.isTrue(list.notes[0] === note, "Add a note to the list");
};

function returnsNotesList(){

  var FakeNote = function(text){
    this.text = text;
  };

  var note1 = new FakeNote("Note 1");
  var note2 = new FakeNote("Note 2");
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

function testGetNoteFromId(){

  var FakeNote = function(text, id){
    this.text = text;
    this.id = id;

    FakeNote.prototype.getId = function(){
      return this.id;
    };
  };

  var list = new List();
  var note1 = new FakeNote("Note 1", 0);
  var note2 = new FakeNote("Note 2", 1);
  list.addNote(note1);
  list.addNote(note2);
  assert.isTrue(list.getNoteFromId(1) === note2, "Can get the note object by searching by Id");
};

// -----------------------------

testInitializeEmptyList();
testAddNoteToList();
returnsNotesList();
testNoteCreationAndAddToList();
testGetNoteFromId();
