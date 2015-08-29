function getTerms(str) {
  var regEx = /\(([^)]+)\)/g;   // get inside parenthesis
  var eq    = str.replace(/\s/g, '');  // strip all white space from str

  var ops = ['+', '-', '/', '*'];
  
  var terms = [],
      pos   = 0;

  for(var i=pos; i < eq.length; i++) {
    if(_.indexOf(ops, eq.charAt(i)) != -1) {
      terms.push(eq.substring(pos, i));
      pos = i+1;
    }
  }
  terms.push(eq.substring(pos));


  console.log(terms);

/*
  var match,
      pTerms = [];
  
  do {
    match = regEx.exec(eq);
    if(match)
      pTerms.push(match[1]);
  } while(match);      
*/
}

function clearInput(id) {
  $("#" + id).val('');
}

$(document).ready(function() {
  
  $("#dot-product-input").keypress(function(e){
    if(e.keyCode === 13) {
      getTerms( $(this).val() );
      return false;
    }
  });

});
