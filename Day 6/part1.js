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

const frequent = (line, letter) => line.filter(x => x === letter).length,
      getCommon = line => [...new Set(line)].sort((x, y) => frequent(line, y) - frequent(line, x) || x.localeCompare(y)).slice(0, 1),
      decode = line => getCommon(line.split(''));

parseData();
console.log(input.map(decode).join(''));