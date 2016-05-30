function calculate_median(arr) {
  //请勿改动函数名
  var newArr = [];
  for(var i = 1; i < arr.length; i = i + 2){
    newArr.push(arr[i]);
  }
  var length = newArr.length;
  if(length % 2 == 0){
    return (newArr[(length / 2) - 1] + newArr[(length / 2)]) / 2;
  }
  else {
    return newArr[(length - 1) / 2];
  }
}

module.exports = calculate_median;
