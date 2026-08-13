const arr = [0, 1, 2, 3, 4];

// ★ 開始インデックスから指定した個数を削除し、削除した要素を返す（破壊的）
console.log('splice(1, 2)');
console.log(arr.splice(1, 2)); // [ 1, 2 ]
console.log(arr); // [ 0, 3, 4 ]
console.log();

// 第3引数以降を渡すと、削除した位置に挿入できる
console.log("splice(1, 1, 'a', 'b')");
console.log(arr.splice(1, 1, 'a', 'b')); // [ 3 ]
console.log(arr); // [ 0, 'a', 'b', 4 ]
console.log();

// ★ 削除する個数に0を指定すると、削除せず挿入だけできる
console.log('splice(2, 0, 9)');
console.log(arr.splice(2, 0, 9)); // []
console.log(arr); // [ 0, 'a', 9, 'b', 4 ]
console.log();

// 負のインデックスは末尾から数える
console.log('splice(-1, 1)');
console.log(arr.splice(-1, 1)); // [ 4 ]
console.log(arr); // [ 0, 'a', 9, 'b' ]
console.log();

// 個数を省略すると、開始インデックスから末尾まで削除する
console.log('splice(1)');
console.log(arr.splice(1)); // [ 'a', 9, 'b' ]
console.log(arr); // [ 0 ]
