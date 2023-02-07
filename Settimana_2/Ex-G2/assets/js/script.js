
var nome = 'Aldo;';
let tipo = 'cliente';
const number = '3,14' ;
document.getElementById('concatena').innerHTML = nome + ',' + tipo + ',' + number;

var unica =nome + ',' + tipo + ',' + number;
document.getElementById('concatena2').innerHTML = unica

var name1='Mario';
let name2='Carla';

document.getElementById('var').innerHTML= name1;
document.getElementById('let').innerHTML= name2;
document.getElementById('final').innerHTML= name1;

document.getElementById('let2').innerHTML= name1;
document.getElementById('let3').innerHTML= name2;
document.getElementById('final2').innerHTML= name2;

var numero=15;
document.getElementById('iniziale').innerHTML= numero;

var incremento=(numero+numero)+","+(numero+(++numero));
document.getElementById('valore1').innerHTML= incremento;

var sottrazione= numero-11;
var decremento=--numero-11;
document.getElementById('valore2').innerHTML=+sottrazione+'.'+decremento;
document.getElementById('valore3').innerHTML=numero*3;
document.getElementById('valore4').innerHTML=numero/3;
document.getElementById('valore5').innerHTML=numero+' '+'è un numero';




