(function(exports){

  var View = function(list){
    this.list = list;
  };

  View.prototype.returnHTML = function(){
    string = ""
    for(var i=0; i<this.list.notes.length; i++){
      string += "<li><div>" + this.list.notes[i].readNote().substring(0,20) + "</div></li>";
    };
    return "<ul>" + string + "</ul>";
  };

  exports.View = View;

})(this);
