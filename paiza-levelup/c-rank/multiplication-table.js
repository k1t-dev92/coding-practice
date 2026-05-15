const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
for (let i = 1; i <= n; i++) {
  const row = [];
  for (let j = 1; j <= n; j++) {
    row.push(i * j);
  }
  console.log(row.join(' '));
}
