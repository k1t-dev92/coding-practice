const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const numbers = lines[0].split(' ').map(Number);

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log(max);
console.log(min);
