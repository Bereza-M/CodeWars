function nameShuffler(str){
    var nameArr = str.split( );
    console.log(nameArr)
    var nameArrRev = nameArr.reverse();
    console.log(nameArrRev)
    var newName = nameArrRev.join(' ');
    return newName;
  }
nameShuffler('john McClane');