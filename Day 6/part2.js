var input = document.body.innerText.trim().split(' ');

function parseData(){
  var newData = [];
  for (var i = 0; i < input[0].length; i++) {
    newData[i] = [];
    for (var j = 0; j < input.length; j++) {
      newData[i].push(input[j].charAt(i))
    }
    newData[i] = newData[i].join('');
  }
  input = newData;
}

var freq = (line, letter) => line.filter(x => x === letter).length,
    common = line => [...new Set(line)].sort((x, y) => freq(line, y) - freq(line, x) || x.localeCompare(y)).slice(-1)[0],
    decod = line => common(line.split(''));

parseData();
console.log(input.map(decod).join(''));
