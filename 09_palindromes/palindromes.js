const palindromes = function (string) {
string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s+]/g,"");
string = string.toLowerCase();
result = false;
let count = 0;
for (let i = 0; i < string.length; i++){
  if (string[i] === string [string.length -1 -i]) {
    count++;
  }
}
if (string.length === count) {
  result = true;
}
return result
};

// Do not edit below this line
module.exports = palindromes;
