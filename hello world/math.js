
function add(a, b) {
    return a + b;
  }

  function sub(a,b){
return a-b;
  }

  module.exports = {  // default export
    add ,sub
  }

  exports.add = (a,b)=>a+b;  // ananomous function
  exports.sub = (a,b)=>a-b;
  //
