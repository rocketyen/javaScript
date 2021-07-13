var numOne = Number;
var numTwo = Number;
var result = Number;

numOne = prompt('entrez un premier nombre : ');
numTwo = prompt('entrez un deuxième nombre : ');
result = Number(numOne) + Number(numTwo);

// alert(numOne + '+' + numTwo + '=' + result);
console.log('le résultat de : ' + numOne + '+' + numTwo + '=' + result);
// avec magic cotes :
console.log(`le résultat de ${numOne} + ${numTwo} est = à : ${result}`);