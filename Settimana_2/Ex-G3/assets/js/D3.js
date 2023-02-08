/*ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var number1 = 2;
var number2 = 4;

if (number1 < number2) {
  document.getElementById('es1').innerHTML = number2;
} else {
  document.getElementById('es1').innerHTML = null;
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

var number3 = 2;

if (number3 !== 5 ) {
  document.getElementById('es2').innerHTML = 'not equal';
} else {
  document.getElementById('es2').innerHTML = 'equal';
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var number4 = 15;

if(number4 % 5 == 0) {
  document.getElementById('es3').innerHTML = 'divisibile per 5';
} else {
  document.getElementById('es3').innerHTML = 'non divisibile per 5';
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var number5 = 5;
var number6 = 3;

if (number5 == 8 || number6 == 8 || number5 - number6 == 8 || number5 + number6 == 8 ) {
  document.getElementById('es4').innerHTML = 'è 8';
} else {
  document.getElementById('es4').innerHTML = 'non è 8';
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart = 30;

if (totalShoppingCart > 50) {
  document.getElementById('es5').innerHTML = 'Totale da pagare: ' + ' ' + totalShoppingCart + '€';

} else {
  totalShoppingCart = totalShoppingCart + 10;
  document.getElementById('es5').innerHTML = 'Totale da pagare: ' + ' ' + totalShoppingCart + '€';
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var totale = totalShoppingCart - (totalShoppingCart * 20 / 100);

if (totalShoppingCart > 50) {
  document.getElementById('es6').innerHTML = 'Totale da pagare: ' + ' ' + totale + '€';

} else {
  totalShoppingCart = totalShoppingCart + 10;
  document.getElementById('es6').innerHTML = 'Totale da pagare: ' + ' ' + totale + '€';
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var a = 10;
var b = 20;
var c = 30;

if(a > b){
  max = a; min = b;
}
else {
  max = b; min = a;
}
if(c>max){
  med = max; max = c;
}
else if(c<min){
  med = min; min = c;
}
else {
  med = c;
}
document.getElementById('es7').innerHTML = max + ' ' + med + ' ' + min;


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

var type = 50;

document.getElementById('es8').innerHTML = typeof type;

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var d = 10;

if (d % 2 == 0) {
  document.getElementById('es9').innerHTML = 'pari';
} else {
  document.getElementById('es9').innerHTML = 'dispari';

}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 4;

if (val < 5) {
  document.getElementById('es10').innerHTML = 'meno di 5';
} else if (val < 10) {
  document.getElementById('es10').innerHTML = 'meno di 5';
} else if (val <= 10) {
  document.getElementById('es10').innerHTML = 'uguale a 10 o minore';
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';
document.getElementById('es11').innerHTML = me.city;


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
document.getElementById('es12').innerHTML = me.lastName;


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
document.getElementById('es13').innerHTML = me.skills;


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var array1 = [];

array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById('es14').innerHTML = array1;


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array1.splice(9);
array1.push(100);

document.getElementById('es15').innerHTML = array1;

