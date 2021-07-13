/* Écrire une fonction qui prend 2 nombres en paramètres 
et qui retourne le résultat de leur multiplication.
Créer un formulaire permettant d'entrer deux nombres.
Au clic sur un bouton, lancer votre fonction. */

// var numOne = Number;
// var numTwo = Number;
// var result = Number;

// numOne = prompt('Entrez un premier chiffre :');
// numTwo = prompt('Entrez un deuxième chiffre :');
// result = numOne * numTwo;

// alert('la multiplication des deux nombre donne : ' + result);

function multipl(){
    var numOne, numTwo, result;
    numOne = Number(document.getElementById("numOne").value);
    numTwo = Number(document.getElementById("numTwo").value);
    result = numOne * numTwo;
    document.getElementById("result").value = result;
}