const character = '#';
const count = 8;
const rows = [];

function padRow(name) {
  return name;
}

const call = padRow('#');

console.log(call);

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
  result = result + row + '\n';
}

console.log(result);
