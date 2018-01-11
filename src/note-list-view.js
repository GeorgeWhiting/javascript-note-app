(function(exports){

  var View = function(list){
    this.list = list;
  };

  View.prototype.returnHTML = function(){
    string = ""
    for(var i=0; i<this.list.notes.length; i++){
      string += '<li><div><a href="#notes/' + this.list.notes[i].getId() + '">' + this.list.notes[i].readNote().substring(0,20) + "</a></div></li>";
    };
    // var listItems = this.list.notes.map((note) => {
    //
    //
    //   return '<li><div><a href="#notes/' + note.getId() + '">' +
    //     note.readNote().substring(0,20) + "</a></div></li>";
    // })
    return "<ul>" + string + "</ul>";
  };

  exports.View = View;

})(this);
