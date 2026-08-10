const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const [a, b] = lines[1].split(' ').map(Number);
const c = lines[2].split(' ').map(Number);

console.log(n);
console.log(a, b);
console.log(c);
