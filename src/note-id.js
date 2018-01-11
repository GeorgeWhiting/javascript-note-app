(function(exports) {


  var NoteId = function(){
    //this.id = 0;
  };

  NoteId.prototype.init = function(){
    this.id = 0;
  };

  NoteId.prototype.increment = function(){
    this.id ++;
  };

  NoteId.prototype.getId = function(){
    return this.id;
  };

exports.NoteId = NoteId;


  // var id = 0;
  //
  // function getNextId() {
  //   return id++;
  // }
  //
  // exports.idGenerator = {
  //   getNextId: getNextId
  // }


})(this);
