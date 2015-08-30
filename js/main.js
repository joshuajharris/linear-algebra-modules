var ops = ['+', '-', '/', '*'];

function performDotProd(u, v) {
  var sum = 0;
  _.each(u, function(coord, index){
    sum += coord * v[index];
  });
  return sum;
}

function performVectOps(terms) {
  var u = [];
  var op;

  _.each(terms, function(term, index) {
    if(typeof( term ) === "string" && _.indexOf(ops, term) != -1) {
      op = term;
    } else if(u.length !== 0) {
      if(op === "*") {
        if(u.length > term.length) {
          //return performDotProd(u, term);
          console.log(performDotProd(u, term));
        } else {
          console.log(performDotProd(u, term));
          //return performDotProd(term, u);
        }
      }
    } else {
      u = term;
    }

    return "Oops! Something went wrong";
  });
}

function getCoords(terms) {
  _.each(terms, function(term, index) {
    if(term.indexOf('<') != -1)
      terms[index] = term.replace(/[<>]/g, '').split(",");
  });

  return terms;
}

function getTerms(str) {
  var regEx = /\(([^)]+)\)/g;   // get inside parenthesis
  var eq    = str.replace(/\s/g, '');  // strip all white space from str

  var terms = [],
      pos   = 0;
  
  for(var i=pos; i < eq.length; i++) {
    if(_.indexOf(ops, eq.charAt(i)) != -1) {
      terms.push(eq.substring(pos, i));
      terms.push(eq.charAt(i));
      pos = i+1;
    }
  }
  terms.push(eq.substring(pos));

  return terms;
}

function clearInput(id) {
  $("#" + id).val('');
}

$(document).ready(function() {
  
  $("#vector-operations-input").keypress(function(e){
    if(e.keyCode === 13) {
      var terms = getCoords( getTerms( $(this).val() ) );
      console.log(performVectOps(terms));
      //$('#vector-operations-sol').text(performVectOps(terms));
      return false;
    }
  });

});
