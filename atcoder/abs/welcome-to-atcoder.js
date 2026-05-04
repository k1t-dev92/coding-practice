const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const a = Number(lines[0]);
const [b, c] = lines[1].split(' ').map(Number);
const s = lines[2];

console.log(`${a + b + c} ${s}`);
