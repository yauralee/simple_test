function even_group_calculate_average(arr) {
  var result = [];
  var evenIndexArr = []
  var evenArr = [];
  for (var i = 1; i < arr.length; i += 2) {
    evenIndexArr.push(arr[i]);
  }
  for (var j = 0; j < evenIndexArr.length; j++) {
    if (evenIndexArr[j] % 2 == 0) {
      evenArr.push(evenIndexArr[j]);
    }
  }
  for (var k = 0; k < 10; k++) {
    var sum = 0,
      ave = 0;
    for (var m = 0, n = 0; m < evenArr.length; m++) {
      if (evenArr[m].toString().length == k) {
        sum += evenArr[m];
        n++;
        ave = sum / n;
      }
    }
    if (ave != 0) {
      result.push(ave);
    }
  }
  if (result.length == 0) {
    result = [0];
  }
  return result;
}
