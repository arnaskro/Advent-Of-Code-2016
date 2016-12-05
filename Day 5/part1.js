const input = 'ffykfhsq';
var index = 0,
    password = [],
    hash;

console.log("Starting...");
var startTime = new Date();

while (password.length < 8) {
  hash = md5(input + index++);
  if (hash.indexOf("00000") == 0) {
    password.push(hash.charAt(5));
    console.log("(" + (password.length) + "/8) "+ password.join(' - '))
  }
}

console.log("OUTPUT: " + password.join(''));
var endTime = new Date(new Date() - startTime);
console.log("Total time: " + endTime.getTime() + " ms  -  " + endTime.getSeconds() + " s");