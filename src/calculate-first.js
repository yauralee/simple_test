function single_element(arr) {
  var arr1 = [];
  var resultArr = [];
  for (var i = 1; i < arr.length; i += 2) {
    arr1.push(arr[i]);
  }

  for (var j = 1; j < arr1.length; j++) {
    for (var k = j; k < arr1.length; k++) {
      if (arr1[k] != arr1[j]) {
        resultArr.push(arr1[k]);
        break;
      }
    }
  }
  return resultArr;
}
