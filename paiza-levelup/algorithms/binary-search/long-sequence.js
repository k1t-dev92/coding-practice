const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const a = lines[1].split(' ').map(Number);
const m = Number(lines[2]);
const b = lines[3].split(' ').map(Number);
b.sort((x, y) => x - y);
const k = Number(lines[4]);

function countAtMost(x) {
  let left = 0;
  let right = b.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (b[mid] <= x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

// |a[i] - b[j]| <= x を満たすマスの個数
function countPairs(x) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += countAtMost(a[i] + x) - countAtMost(a[i] - x - 1);
  }
  return total;
}

// 探索範囲の上限を求める
let minA = a[0];
let maxA = a[0];
for (let i = 0; i < n; i++) {
  if (a[i] < minA) minA = a[i];
  if (a[i] > maxA) maxA = a[i];
}
const minB = b[0];
const maxB = b[m - 1];
let low = 0;
let high = Math.max(Math.abs(maxA - minB), Math.abs(minA - maxB));

// countPairs(x) >= k となる最小の x が答え
while (low < high) {
  const mid = Math.floor((low + high) / 2);
  if (countPairs(mid) >= k) {
    high = mid;
  } else {
    low = mid + 1;
  }
}

console.log(low);
