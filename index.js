// add solution here
function theBeatlesPlay(musicians, instruments){
  var theArray = [];
  for (var i = 0; i < musicians.length; i++){
    theArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return theArray;
  }
  
  function johnLennonFacts(facts){
    var i = 0;
    var loudFacts = [];
    while (i < facts.length){
      loudFacts.push(`${facts[i]}!!!`);
      i++;
    }
    return loudFacts
  }
  
  function iLoveTheBeatles(n){
      var theArray = [];
      var i = 0
    do {
      theArray.push("I love the Beatles!");
      i = i + n;
    } 
    while (n < 15);
    return theArray
  }