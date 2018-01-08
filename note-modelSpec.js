function testInitializesWithDefault(){
  var note = new Note();

  assert.isTrue(note.text === 'My favourite language is Javascript')
};

testInitializesWithDefault();



function testInitializesWithText(){
  var note = new Note('This is a new note');
  assert.isTrue(note.text === 'This is a new note')
};

testInitializesWithText();
