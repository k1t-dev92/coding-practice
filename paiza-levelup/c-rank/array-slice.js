const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [n, b, c] = lines[0].split(' ').map(Number);
const a = lines.slice(1).map(Number);

console.log(n + 1);
console.log(b + 1);
console.log(c + 1);

a.forEach((v) => console.log(v + 1));
