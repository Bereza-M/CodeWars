//Параметр - строка, нужно поставить первый символ в верхний регистр
function capitalizeWord(word) {
    var array = word.split('');
    var firstChar = array[0].toUpperCase();
    array.splice(0,1);
    array.unshift(firstChar);
    return array.join('');
  }