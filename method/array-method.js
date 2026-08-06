const arr = [1, 2, 3];

// 末尾に4を追加
arr.push(4);
console.log('push');
console.log(arr); // [ 1, 2, 3, 4 ]
console.log();

// 末尾の要素を削除して、その値を返す
const last = arr.pop();
console.log('pop');
console.log(last); // 4
console.log(arr); // [ 1, 2, 3 ]
console.log();

// 先頭に0を追加
arr.unshift(0);
console.log('unshift');
console.log(arr); // [ 0, 1, 2, 3 ]
console.log();

// 先頭の要素を削除して、その値を返す
const first = arr.shift();
console.log('shift');
console.log(first); // 0
console.log(arr); // [ 1, 2, 3 ]
