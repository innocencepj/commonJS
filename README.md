<!-- git fetch 与 git pull 的区别 -->
git fetch 只是拉取最新代码，不会自动merge。
git pull 拉取最新代码，并自动合并。

<!-- splice split join -->
1. splice 用于向数组中增加，删除元素，返回被删除的项目，改变原始数组
eg: 
    删除一个元素：arr.splice(index, 1);
    增加一个元素：arr.splice(index, 1, 'apple');
    arr.splice(index, howmany, item);

2. split 用于将字符串转化成数组。
eg:
    string.split(',');
    
3. join 用于将数组转化成字符串。
eg:
    arr.join(',')。