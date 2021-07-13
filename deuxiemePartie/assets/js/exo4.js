var num = Number;
num = prompt('Donnez moi une note : ');

if(num >= 0 && num <= 3){
    alert('Nul');
}
if(num > 4 && num < 6){
    alert('Moyen');
}
if(num >6  && num < 8){
    alert('Assez bien');
}
if(num > 8 && num < 10){
    alert('Bien');
}
if(num == 10){
    alert('Excellent');
}