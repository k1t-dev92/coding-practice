const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [l, n, k] = lines[0].split(' ').map(Number);
const a = lines[1].split(' ').map(Number);

// すべてのピースを x 以下にして n 分割できるか判定する
// x を超えない範囲でできるだけ右まで進み、超えたら 1 つ前の切れ目で切る（貪欲法）
function canCut(x) {
  let left = 0;
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (a[i] - left > x) {
      const prev = i === 0 ? 0 : a[i - 1];
      if (prev === left) return false; // 切れる位置がなく x 以下にできない
      left = prev;
      count++;
      if (a[i] - left > x) return false; // 切れ目の間隔そのものが x より広い
    }
  }

  // 右端までの残りが長すぎる場合は、最後の切れ目でもう一度切る
  if (l - left > x) {
    if (a[k - 1] === left) return false;
    left = a[k - 1];
    count++;
    if (l - left > x) return false;
  }

  // ピース数は count + 1。n より少なければ余った切れ目で切ればいいので <= で判定する
  return count + 1 <= n;
}

// 達成可能な最小の x を探す。high は常に達成可能な側に置く
let low = 0;
let high = l;
for (let i = 0; i < 100; i++) {
  const mid = Math.floor((low + high) / 2);
  if (canCut(mid)) {
    high = mid;
  } else {
    low = mid;
  }
}

console.log(high);

// https://paiza.jp/works/mondai/binary_search/binary_search__application_step3
