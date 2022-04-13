function betterThanAverage(classPoints, yourPoints) {
  var sum = 0;
  for (var i=0; i<classPoints.length; i++) {
  sum +=classPoints[i];
  }
  var averageClass = (sum + yourPoints)/(classPoints.length + 1);
  if (yourPoints>averageClass) {
    return true;
  } else {
    return false;
  }
}