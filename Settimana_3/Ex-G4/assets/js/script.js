/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.
      */
const changeTitle = function (newTitle) {
  document.querySelector(".myClass").innerHTML = newTitle;
  return newTitle;
};
changeTitle("Benvenuto!");

/* ESERCIZIO 2
       Scrivi una funzione per cambiare la classe del titolo della pagina in "myHeading".
      */
     
       function changeTitleClass() {
        var title = document.getElementsByTagName("h1")[0];
        title.classList.add("myHeading");
      }
      changeTitleClass();
/* ESERCIZIO 3


       Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div.
      */
const changePcontent = function (test) {
var newp = (document.querySelectorAll("div p"));
newp.forEach((p) =>( p.innerHTML=test));
}
changePcontent('pollo')

/* ESERCIZIO 4
       Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com
      */
       function cambiaHref() {
        var links = document.getElementsByTagName("a"); 
        for (var i = 0; i < links.length; i++) {
          links[i].href = "https://www.google.com"; 
        }
      }
      cambiaHref();
/* ESERCIZIO 5
       Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.
      */

       const addToTheSecond = function () {
        const nuovoUl = document.createElement("li");
        const dad = document.querySelector("#secondList");
        dad.appendChild(nuovoUl);
      };
      addToTheSecond()
/* ESERCIZIO 6
       Scrivi una funzione per aggiungere un secondo paragrafo al primo div.
      */

       const addParagraph = function () {
        const nuovoP = document.createElement("p");
        const padre = document.getElementsByTagName("div")[0];
        padre.appendChild(nuovoP);
      };
      addParagraph();

/* ESERCIZIO 7
       Scrivi una funzione per far scomparire la prima lista non-ordinata.
      */

const nascondiul = function () {
  const lista1 = document.getElementsByTagName("ul")[0];
  lista1.remove();
};
nascondiul();

/* ESERCIZIO 8
       Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.
      */

function rendiSfondoVerde() {
  var listeNonOrdinate = document.getElementsByTagName("ul");
  for (var i = 0; i < listeNonOrdinate.length; i++) {
    listeNonOrdinate[i].style.backgroundColor = "green";
  }
}
rendiSfondoVerde();
/* ESERCIZIO 9
       Resto oendi il tag h1 capace di cambiare colore del tgni volta che l'utente ci clicca sopra.
      */

       var h1 = document.getElementsByTagName("h1")[0]; 
       h1.addEventListener("click", function() {
       var colors = ["red", "green", "blue", "orange", "purple", "teal"]; 
       var randomColor = colors[Math.floor(Math.random() * colors.length)]; 
       h1.style.color = randomColor; 
     });
     
/* ESERCIZIO 10
       Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.
      */

const changeFooterText = function () {
  //
};

/* ESERCIZIO 11
       Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo ogni lettera il suo valore venga mostrato in console.
      */

const inputField = document.getElementById("input-field");
// ...

/* ESERCIZIO 12
       Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.

            window.onload = function () {
        alert('Benevenuto')
      }
      */
