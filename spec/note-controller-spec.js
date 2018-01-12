function testInitialize(){
  var list = new List();
  var controller = new Controller(list);
  assert.isTrue(controller instanceof Controller, "Controller can be instantiated");
};

function testInnerHTML(){

  var FakeList = function(){
  };

  var FakeView = function(){
  };
  FakeView.prototype.returnHTML = function(){
    return "<ul><li><div>Fav drink: pesto</div></li></ul>";
  };

  var list = new FakeList();
  var view = new FakeView();
  var controller = new Controller(list, view);
  var html = controller.view.returnHTML();
  controller.printList('app');
  assert.isTrue(document.getElementById('app').innerHTML === html, "InnerHTML contains the list HTML")
};

function testHTMLUpdatesOnPage(){

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

// -----------------------------

  testInitialize();
  testInnerHTML();
