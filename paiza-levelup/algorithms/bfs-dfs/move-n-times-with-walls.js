const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [h, w, n] = lines[0].split(' ').map(Number);
const [y, x] = lines[1].split(' ').map(Number);
const s = [];
for (let i = 0; i < h; i++) {
  s[i] = lines[i + 2].split('');
}

s[y][x] = '*';

const moves = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let current = [[y, x]];

for (let i = 0; i < n; i++) {
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

const results = [];
for (let i = 0; i < h; i++) {
  results.push(s[i].join(''));
}
console.log(results.join('\n'));

// https://paiza.jp/works/mondai/bfs_dfs_problems/bfs_dfs_problems__move_obstacle
