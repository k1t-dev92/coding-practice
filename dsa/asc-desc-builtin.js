const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const numbers = lines[0].split(' ').map(Number);

let asc = numbers.sort((a, b) => a - b);
console.log(asc.join(' '));

let desc = numbers.sort((a, b) => b - a);
console.log(desc.join(' '));
