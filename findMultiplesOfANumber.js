function findMultiples(integer, limit) {
    var multiples = [];
    for (var i = 1; i <= limit; i+=1) {
        if (integer*i <= limit) {
            multiples.push(integer*i);
        }
    }
    return multiples;
  }

 