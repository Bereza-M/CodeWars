function magNumber(info){
    let PT92 = 17;
    let M4A1 = 30;
    let M16A2 = 30;
    let PSG1 = 5;
  if (info[0] == "PT92") {
      return Math.ceil(info[1]*3/PT92);
  }
  else if (info[0] == "M4A1") {
    return Math.ceil(info[1]*3/M4A1);
  }
  else if (info[0] == "M16A2") {
    return Math.ceil(info[1]*3/M16A2);
  }
  else if (info[0] == "PSG1") {
    return Math.ceil(info[1]*3/PSG1);
  }
}
