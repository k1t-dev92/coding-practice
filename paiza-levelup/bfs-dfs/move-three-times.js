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

let current = [[y, x]];

for (let i = 0; i < 3; i++) {
  const next = [];
  for (const [cy, cx] of current) {
    for (const [dy, dx] of moves) {
      const ny = cy + dy;
      const nx = cx + dx;
      if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
      if (grid[ny][nx] === '*') continue;
      grid[ny][nx] = '*';
      next.push([ny, nx]);
    }
  }
  current = next;
}

const results = [];
for (let i = 0; i < h; i++) {
  results.push(grid[i].join(''));
}
console.log(results.join('\n'));
