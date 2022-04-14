function squareOrSquareRoot(array) {
    return array.map(function(element) {
      if (Number.isInteger(Math.sqrt(element))) {
            return Math.sqrt(element);  
          } else {
            return Math.pow(element, 2);
          }
      }); 
    }     
  