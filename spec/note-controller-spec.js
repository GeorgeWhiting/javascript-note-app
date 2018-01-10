function testInitialize(){
  var list = new List();
  var controller = new Controller(list);
  assert.isTrue(controller instanceof Controller, "Controller can be instantiated");
};

function testInnerHTML(){
  var list = new List();
  var controller = new Controller(list);
  var html = controller.view.returnHTML();
  controller.printList('app');
  assert.isTrue(document.getElementById('app').innerHTML === html, "InnerHTML contains the list HTML")
};



// -----------------------------
// calling the test functions

testInitialize();
testInnerHTML();
