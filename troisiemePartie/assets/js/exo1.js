// En js

var year = Date;

for(year=2020; year<=2030; year++) {
	if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
		// (year + " est bissextile");
		console.error(year + " est bissextile");
	} 
	else {
		// alert(year + " n'est pas bissextile");
		console.log(year + " n'est pas bissextile")
	}
}

// En html

// var year = 2020;
// while (year <= 2030) {
//     console.log(year);
//     if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
//         /* changer la couleur d'affichage de year*/
//         document.write("<FONT COLOR='red'>" +year+" "+"</FONT>");
//     } else { document.write(year + " "); }
//     year++;
// }

// var nbr = prompt('entrer un nombre : ');

// function nbrPremier(nbr) {
// 	for(var i = 2; i < nbr; i++)
// 	  if(nbr%i === 0) return false;
// 	return nbr > 1;
//   }
//   console.log(nbrPremier(2));