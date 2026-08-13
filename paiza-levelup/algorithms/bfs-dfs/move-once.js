const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [h, w] = lines[0].split(' ').map(Number);
const [y, x] = lines[1].split(' ').map(Number);

const grid = [];
for (let i = 0; i < h; i++) {
  grid.push(new Array(w).fill('.'));
}

grid[y][x] = '*';

const moves = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

for (const [dy, dx] of moves) {
  const ny = y + dy;
  const nx = x + dx;
  if (ny >= 0 && ny < h && nx >= 0 && nx < w) {
    grid[ny][nx] = '*';
  }
}

const results = [];
for (let i = 0; i < h; i++) {
  results.push(grid[i].join(''));
}
console.log(results.join('\n'));

// https://paiza.jp/works/mondai/bfs_dfs_problems/bfs_dfs_problems__move_once
