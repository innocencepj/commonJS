自己需要记得的知识点：

<!-- git fetch 与 git pull 的区别 -->
git fetch 与 git pull 的区别：
git fetch 只是拉取最新代码，不会自动merge。
git pull 拉取最新代码，并自动合并。

<!-- splice split join -->
splice split join：
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

<!-- 数组操作方法 -->
数组操作方法：

unshift: 在数组前加入元素，并返回新数组长度。

shift: 删除数组的第一个元素，并返回删除的元素。

push: 从数组末尾加入元素，并返回新的长度。

pop: 删除并返回数组的最后一个元素。

splice: 删除元素，并向数组添加新元素。

slice: 从某个已有的数组返回选定的元素。