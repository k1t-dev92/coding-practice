const rows = [];

for (let i = 1; i <= 9; i++) {
  const results = [];
  for (let j = 1; j <= 9; j++) {
    results.push(String(i * j).padStart(2, ' '));
  }
  rows.push(results.join(' '));
}

console.log(rows.join('\n'));
