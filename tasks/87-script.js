const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    ' '.repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    ' '.repeat(rowCount - rowNumber)
  );
}

// TODO: use a different type of loop

/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

let continueLoop = false;
let done = 0;

while (continueLoop) {
  done++;
  if (done == count) {
  }
}

let result = '';

for (const row of rows) {
  result = result + row + '\n';
}

console.log(result);
