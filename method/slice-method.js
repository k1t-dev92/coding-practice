const arr = [0, 1, 2, 3, 4];

// 開始インデックスから終了インデックスの手前まで切り出す（非破壊）
console.log('slice(1, 3)');
console.log(arr.slice(1, 3)); // [ 1, 2 ]
console.log();

// 開始インデックスから末尾まで
console.log('slice(2)');
console.log(arr.slice(2)); // [ 2, 3, 4 ]
console.log();

// 負のインデックスは末尾から数える
console.log('slice(-2)');
console.log(arr.slice(-2)); // [ 3, 4 ]
console.log();

// 文字列でも同じように使える
console.log("'hello'.slice(1, 3)");
console.log('hello'.slice(1, 3)); // el
