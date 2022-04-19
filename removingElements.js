function removeEveryOther(arr){
    for (let i=1; i<arr.length; i+=1) {
        arr.splice(i, 1);
    }
    return arr;
  }