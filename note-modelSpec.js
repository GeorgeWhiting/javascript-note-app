(function(exports){
  function testInitializesWithDefault(){
  var note = new Note();

  if(note.text!=="My favourite language is Javascript") {
    throw new Error ("Error has been detected!!");
  }
};


//   assert.isTrue(note.text === 'My1 favourite language is Javascript')


testInitializesWithDefault();
})(this);


//
//
// function testInitializesWithText(){
//   var note = new Note('This is a new note');
//   assert.isTrue(note.text === 'This is a new note')
// })(this);
