const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [l, n, k] = lines[0].split(' ').map(Number);
const a = lines[1].split(' ').map(Number);

// すべてのピースを x 以上にして n 分割できるか判定する
// 左から順に見て、直前に切った位置から x 以上離れてたら切る（貪欲法）
function canCut(x) {
  let left = 0;
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (a[i] - left >= x) {
      left = a[i];
      count++;
    }
  }

  // 最後のピースが x未満なら、最後の切れ目は使わない（ピースが1つ減る）
  const pieces = l - left >= x ? count + 1 : count;
  return pieces >= n;
}

let lo = 0;
let hi = l + 1;
for (let i = 0; i < 100; i++) {
  const mid = Math.floor((lo + hi) / 2);
  if (canCut(mid)) {
    lo = mid;
  } else {
    hi = mid;
  }
}

console.log(lo);

// https://paiza.jp/works/mondai/binary_search/binary_search__application_step2
