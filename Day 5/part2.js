const input = 'ffykfhsq';
var index = 0,
    password = '________'.split(''),
    hash;

console.log("Starting...");
var startTime = new Date();

while (password.slice(0, 8).filter(a => a != "_").length < 8) {
  hash = md5(input + index++);
  if (hash.indexOf("00000") == 0) {
    if (parseInt(hash.charAt(5), 16) < 8 && password[parseInt(hash.charAt(5), 16)] == "_") {
      password[parseInt(hash.charAt(5), 16)] = hash.charAt(6);
      console.log(password.slice(0, 8).join(''))
    }
  }
}

console.log("OUTPUT: " + password.slice(0, 8).join(''));
var endTime = new Date(new Date() - startTime);
console.log("Total time: " + endTime.getTime() + " ms  -  " + endTime.getSeconds() + " s");