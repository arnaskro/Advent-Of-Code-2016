Object.prototype.checkForReversePattern = function() {
  let counter = 0; 
  const letters = this.split('');
  while(counter < letters.length - 3) {
    if (letters[counter] === letters[counter + 3] 
      && letters[counter + 1] === letters[counter + 2]
      && letters[counter] !== letters[counter + 1] 
    ) return true;
    counter++;
  }
  return false;
}

var result = document.body.innerText.split(" ").map(item => item.trim())
  .map(item => item.split(/[\[\]]/))
  .map(item => item.map(sub => sub.checkForReversePattern()))
  .map(item => item.reduce((prev, curr, index) => {
    if (index % 2 === 0) prev.regulars.push(curr);
    else prev.betweens.push(curr);
    return prev;
  }, { regulars: [], betweens: [] }))
  .map(item => 
    item.regulars.some(element => element === true) 
    && item.betweens.every(element => element === false)
  )
  .reduce((prev, curr) => {
    if (curr) prev++;
    return prev;
  }, 0);

console.log(result);