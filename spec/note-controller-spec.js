function testInitialize(){
  var list = new List();
  var controller = new Controller(list);
  assert.isTrue(controller instanceof Controller, "Controller can be instantiated");
};

function testInnerHTML(){

  var FakeList = function(){
    FakeList.prototype.returnAllNotes = function(){
      return "[Fav drink: pesto]";
    };
  };

  var FakeView = function(){
    FakeView.prototype.returnHTML = function(){
      return "<ul><li><div>Fav drink: pesto</div></li></ul>";
    };
  };

  var list = new FakeList();
  var view = new FakeView();
  var controller = new Controller(list, view);
  var html = controller.view.returnHTML();
  controller.printList('app');
  assert.isTrue(document.getElementById('app').innerHTML === html, "InnerHTML contains the list HTML")
};



// -----------------------------
// calling the test functions

testInitialize();
testInnerHTML();
