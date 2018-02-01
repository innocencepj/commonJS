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
