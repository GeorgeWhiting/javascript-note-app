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

  var FakeNote = function(text, id){
    this.text = text;
    this.id = id;

    FakeNote.prototype.readNote = function(){
      return this.text;
    };
    FakeNote.prototype.getId = function(){
      return this.id;
    };
  };

  var note1 = new FakeNote("Note 1", 0);
  var list = new List();
  list.addNote(note1);
  var view = new View(list);
  assert.isTrue(view.returnHTML() === '<ul><li><div><a href="#notes/0">Note 1</a></div></li></ul>', "Converts a one note list to HTML");
};

function testHTMLconvertManyNotes(){

  var FakeNote = function(text, id){
    this.text = text;
    this.id = id;

    FakeNote.prototype.readNote = function(){
      return this.text;
    };
    FakeNote.prototype.getId = function(){
      return this.id;
    };
  };

  var note1 = new FakeNote("Note 1", 0);
  var note2 = new FakeNote("Note 2", 1);
  var list = new List();
  list.addNote(note1);
  list.addNote(note2);
  var view = new View(list);
  assert.isTrue(view.returnHTML() === '<ul><li><div><a href="#notes/0">Note 1</a></div></li><li><div><a href="#notes/1">Note 2</a></div></li></ul>', "Converts a many note list to HTML");
};

function testOnlyTwentyCharsDisplayed(){
  var FakeNote = function(text, id){
    this.text = text;
    this.id = id;

    FakeNote.prototype.readNote = function(){
      return this.text;
    };
    FakeNote.prototype.getId = function(){
      return this.id;
    };
  };

  var note1 = new FakeNote("abcdefghijklmnopqrstuvwxyz", 0);
  var list = new List();
  list.addNote(note1);
  var view = new View(list);
  assert.isTrue(view.returnHTML() === '<ul><li><div><a href="#notes/0">abcdefghijklmnopqrst</a></div></li></ul>', "List only displays the first 20 chars of a note");
};




// -----------------------------

testInitializeWithList();
testHTMLconvertNoNotes();
testHTMLconvertOneNote();
testHTMLconvertManyNotes();
testOnlyTwentyCharsDisplayed();
