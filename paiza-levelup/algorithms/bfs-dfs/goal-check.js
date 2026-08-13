const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [h, w] = lines[0].split(' ').map(Number);
const [sy, sx] = lines[1].split(' ').map(Number);
const [gy, gx] = lines[2].split(' ').map(Number);
const s = [];
for (let i = 0; i < h; i++) {
  s[i] = lines[i + 3].split('');
}

s[sy][sx] = '*';

const moves = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let current = [[sy, sx]];

while (current.length !== 0) {
  const next = [];
  for (const [cy, cx] of current) {
    for (const [dy, dx] of moves) {
      const ny = cy + dy;
      const nx = cx + dx;
      if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
      if (s[ny][nx] !== '.') continue;
      s[ny][nx] = '*';
      next.push([ny, nx]);
    }
  }
  current = next;
}

if (s[gy][gx] === '*') {
  console.log('Yes');
} else {
  console.log('No');
}

// https://paiza.jp/works/mondai/bfs_dfs_problems/bfs_dfs_problems__judge_reach
