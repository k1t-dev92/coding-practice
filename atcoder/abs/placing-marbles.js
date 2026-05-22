const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const s = lines[0].split('');

const count = s.filter((c) => c === '1').length;

console.log(count);
