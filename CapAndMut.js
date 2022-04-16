function capitalizeWord(word) {
    var array = word.split();
    array[0] = array[0].toUpperCase();
    var newWord = array.join();
    return newWord;
  }