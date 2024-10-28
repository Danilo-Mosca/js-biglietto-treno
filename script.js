/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km) 
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Fase 1 - Preparazione
Obiettivo: output prezzo del viaggio (max 2 decimali)
*/

/* Fase 2 
Raccolta dati (mi creo le variabili necessarie calcolare il prezzo del biglietto secondo i km percorsi e l'età del viaggiatore) */

// Utlizzo la direttiva "use strict" per far eseguire il codice in maniera rigorosa
"use strict";
// Ripulisco la console
console.clear();
// Creo una variabile contenente i km, la inizializzo e la trasformo il float (Casting)
const km = parseFloat(prompt("Quanti kilometri devi percorrere?"));
// Creo una variabile contenente l'età del viaggiatore, la inizializzo e la trasformo in intero (Casting)
const age = parseInt(prompt("Quanti anni hai?"));

// Fase 3 
// Mi creo le costanti per il prezzo al kilometro e la percentuale di sconto per gli under 18 e gli over 65
const priceKm = 0.21;
const discountUnder = 20;
const discountOver = 40;
// Creo la variabile che conterrà il prezzo finale con o senza sconto applicato
let finalPrice;


// Fase 4 
// Controllo l'età del passeggero passeggero è applico l'eventuale sconto

if (age < 18) {
    finalPrice = km * priceKm;
    finalPrice = (finalPrice - ((finalPrice / 100) * discountUnder));
    // Arrotondo il prezzo a due decimali dopo la virgola
    finalPrice = finalPrice.toFixed(2);
    //Provo se tutto funziona con un console log
    console.log(finalPrice);
}
else if (age > 65) {
    finalPrice = km * priceKm;
    finalPrice = (finalPrice - ((finalPrice / 100) * discountOver));
    // Arrotondo il prezzo a due decimali dopo la virgola
    finalPrice = finalPrice.toFixed(2);
    //Provo se tutto funziona con un console log
    console.log(finalPrice);
}
else {
    finalPrice = km * priceKm;
    // Arrotondo il prezzo a due decimali dopo la virgola
    finalPrice = finalPrice.toFixed(2);
    //Provo se tutto funziona con un console log
    console.log(finalPrice);
}

alert("Il prezzo del biglietto è di € " + finalPrice);
