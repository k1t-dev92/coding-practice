const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [n, k] = lines[0].split(' ').map(Number);
const w = lines[1].split(' ').map(Number);
const v = lines[2].split(' ').map(Number);

// 平均価値を x 以上にできるか判定する
// v の和 / w の和 >= x <=> Σ(v[i] - x * w[i]) >= 0
function canAchieve(x) {
  const scores = [];
  for (let i = 0; i < n; i++) {
    scores.push(v[i] - x * w[i]);
  }
  scores.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += scores[i];
  }
  return sum >= 0;
}

// 答えの値そのものを二分探索する
let low = 0;
let high = 5000;
for (let i = 0; i < 100; i++) {
  const mid = (low + high) / 2;
  if (canAchieve(mid)) {
    low = mid;
  } else {
    high = mid;
  }
}

console.log(low.toFixed(10));

// https://paiza.jp/works/mondai/binary_search/binary_search__application_step1
