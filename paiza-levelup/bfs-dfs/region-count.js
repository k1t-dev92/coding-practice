const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [h, w] = lines[0].split(' ').map(Number);
const s = [];
for (let i = 0; i < h; i++) {
  s[i] = lines[i + 1].split('');
}

const moves = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function dfs(cy, cx) {
  s[cy][cx] = '#';

  for (const [dy, dx] of moves) {
    const ny = cy + dy;
    const nx = cx + dx;
    if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
    if (s[ny][nx] !== '.') continue;
    dfs(ny, nx);
  }
}

let count = 0;
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (s[i][j] === '.') {
      count++;
      dfs(i, j);
    }
  }
}

console.log(count);

// https://paiza.jp/works/mondai/bfs_dfs_problems/bfs_dfs_problems__number_of_area
