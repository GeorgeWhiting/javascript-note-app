function testInitializeWithList(){
  var list = new List();
  var view = new View(list);
  assert.isTrue(view.list === list, "Accepts list array from arguments on initialise");
};

function testHTMLconvertNoNotes(){
  var list = new List();
  var view = new View(list);
  assert.isTrue(view.returnHTML() === "<ul></ul>", "Converts an empty list to HTML");
};

function testHTMLconvertOneNote(){
  var note1 = new Note("Note 1");
  var list = new List();
  list.addNote(note1);
  var view = new View(list);
  assert.isTrue(view.returnHTML() === "<ul><li><div>Note 1</div></li></ul>", "Converts a one note list to HTML");
};

function testHTMLconvertManyNotes(){
  var note1 = new Note("Note 1");
  var note2 = new Note("Note 2");
  var list = new List();
  list.addNote(note1);
  list.addNote(note2);
  var view = new View(list);
  assert.isTrue(view.returnHTML() === "<ul><li><div>Note 1</div></li><li><div>Note 2</div></li></ul>", "Converts a many note list to HTML");
};


// -----------------------------
// calling the test functions

testInitializeWithList();
testHTMLconvertNoNotes();
testHTMLconvertOneNote();
testHTMLconvertManyNotes();
