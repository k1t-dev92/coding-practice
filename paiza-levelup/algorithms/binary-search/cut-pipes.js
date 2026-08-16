const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [n, k] = lines[0].split(' ').map(Number);
const a = lines[1].split(' ').map(Number);

// 長さxで切ったとき、合計何本取れるか
function count(x) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += Math.floor(a[i] / x);
  }
  return total;
}

let lo = 0;
let hi = 10000;
for (let i = 0; i < 100; i++) {
  const mid = (lo + hi) / 2;
  if (count(mid) >= k) {
    lo = mid;
  } else {
    hi = mid;
  }
}

console.log(lo.toFixed(10));

// https://paiza.jp/works/mondai/binary_search/binary_search__application_step0
