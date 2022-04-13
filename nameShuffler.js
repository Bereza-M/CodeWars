function nameShuffler(str){
    var nameArr = str.split(" ");
    var nameArrRev = nameArr.reverse();
    var newName = nameArrRev.join(" ");
    return newName;
  }
nameShuffler("john McClane");