(function(exports) {
  var EXCLAMATION_MARK_COUNT = 5

  function exclaim(string) {
    return string + "!".repeat(EXCLAMATION_MARK_COUNT);
  };

  function exclaim2(string) {
    return string + "2!".repeat(EXCLAMATION_MARK_COUNT);
  };

  exports.test = exclaim;
  exports.test2 = exclaim2;

})(this)


  console.log(exports);
  console.log("hello");
