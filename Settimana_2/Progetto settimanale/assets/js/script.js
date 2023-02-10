//Ho creato una funzione che riprenda i valori dati nell' html
function tasto(n) {
    document.info.visual.value = document.info.visual.value + n;
}
//Ho creato una function per fare i calcoli(grazie a eval) e dare il risultato(grazie a risultato())
function risultato() {
    if (document.info.visual.value) {
        document.info.visual.value = eval(document.info.visual.value);
    }
}
//Per ultimo ho creato una function per cancellare con il tasto C che è collegato a reset()
function reset() {
    document.info.visual.value = '';
}
