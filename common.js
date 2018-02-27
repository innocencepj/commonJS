// 1.  获取数组中出现次数最多的数字及其出现次数
function max(nums) {
  var obj = {};

  for (var i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
      continue;
    }
    obj[nums[i]] = 1;
  }

  var max = 0;
  var maxKey;

  for (var j in obj) {
    if (obj[j] > max) {
      max = obj[j];
      maxKey = j;
    }
  }
  return {
    max: max,
    maxKey: maxKey
  };
}


// 2.斐波拉契数列  f(n) = f(n-1) + f(n-2)
function fib(num){
  if(num === 0 || num === 1){
    return num;
  }
  return fib(num-1) + fib(num-2);
}

// 3.阶乘
function factorial(n){
  if(n === 0 || n === 1){
    return 1;
  }
  return n * factorial(n-1);
}

// 4.数组是否按升序排序
function isSorted(arr){
  if(Array.isArray(arr) && arr.length <= 1){
    return true;
  }
  for(var i=0; i<arr.length; i++){
    if(arr[i] <= arr[i+1]){
      arr.splice(i, 1);
      return isSorted(arr);
    }
    return false;
  }
}

// 5.深拷贝
function deepClone(data){
  var obj;
  if(data instanceof Array){
    obj = [];
    for(var j=0; j<data.length; j++){
      obj.push(deepClone(data[j]));
    }
  }else if(data instanceof Object){
    obj = {};
    for(var key in data){
      obj[key] = deepClone(data[key]);
    }
  }else{
    return data;
  }
  return obj;
}

/* 
	6.一个柱子上串了n个半径不同的大饼，现要求大的在下小的在上重排位置。
  规则：每次选m个拿起来反转再放上去，问是否可以实现重排要求。
*/
var result = [];
function reSort(arr){
  for(var i=0; i<arr.length; i++){
    if(arr[i] == Math.min.apply(null, arr)){
      var temp = arr.slice(0, i+1);
      temp.reverse();
      var min = temp.shift();
      result.push(min);
      arr.splice(i, 1);
    }
    if(arr.length){
      reSort(arr);
    }
  }
  return result;
}



