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

// Fase 3 
// Mi creo le costanti per il prezzo al kilometro e la percentuale di sconto per gli under 18 e gli over 65
const priceKm = 0.21;
const discountUnder = 20;
const discountOver = 40;
// Creo la variabile che conterrà il prezzo finale con o senza sconto applicato
let finalPrice;


// Fase 4

// Creo una variabile contenente i km
let km;
// Mi creo una variabile booleana di controllo per i km
let flagKm = true;

// Ciclo per controllo inserimento corretto dei km: 
while (flagKm == true) {
    // chiedo in input un valore da assegnare a km
    km = prompt("Quanti kilometri devi percorrere?");
    // Verifico se l'utente abbia inserito un numero, nel caso non l'abbia fatto stampo in output un messaggio
    if (parseFloat(km) != km) {
        alert("Non hai inserito un valore valido");
    } else {
        // Se l'utente ha inserito un valore valido allora la variabile flagKm diventa false così posso uscire dal ciclo
        flagKm = false;
        // Ora faccio il casting della variabile km perchè non ho più bisogno di controllare il valore inserito in input
        km = parseFloat(km);
    }
}

// Creo una variabile contenente l'età
let age;
// Mi creo una variabile booleana di controllo per l'età
let flagAge = true;

// Ciclo per controllo inserimento corretto dell'età
// Condizione: flagAge è equivalente a scrivere flagAge == true
while (flagAge) {
    // Creo una variabile contenente l'età del viaggiatore e chiedo in input con un prompt all'utente di inserire un valore
    age = prompt("Quanti anni hai?");
    // Controllo se l'utente ha inserito un valore valido per l'età, nel caso non l'abbia fatto stampo in output un messaggio
    if (parseFloat(age) != age) {
        alert("Non hai inserito un'età corretta!");
    } else {
        // Se l'utente ha inserito un valore valido allora la variabile flagAge diventa false così posso uscire dal ciclo
        flagAge = false;
        // Ora faccio il casting della variabile age perchè non ho più bisogno di controllare il valore inserito in input
        age = parseInt(age);
    }
}

// Controllo l'età per vedere se posso applicare lo sconto al prezzo del biglietto
// Se è un minore applico uno sconto del 20%
if (age < 18) {
    finalPrice = km * priceKm;
    finalPrice -= (finalPrice / 100) * discountUnder;
    // Arrotondo il prezzo a due decimali dopo la virgola
    finalPrice = finalPrice.toFixed(2);
    //Provo se tutto funziona con un console log
    // console.log(finalPrice);
    alert("Il prezzo del biglietto è di € " + finalPrice);
  
    // Se è un over 65 applico uno sconto del 40%
} else if (age > 65) {
    finalPrice = km * priceKm;
    finalPrice -= (finalPrice / 100) * discountOver;
    // Arrotondo il prezzo a due decimali dopo la virgola
    finalPrice = finalPrice.toFixed(2);
    //Provo se tutto funziona con un console log
    //console.log(finalPrice);
    alert("Il prezzo del biglietto è di € " + finalPrice);

  // Altrimenti non applico nessuno sconto
} else if ((age >= 18) && (age <= 65)) {
    finalPrice = km * priceKm;
    // Arrotondo il prezzo a due decimali dopo la virgola
    finalPrice = finalPrice.toFixed(2);
    //Provo se tutto funziona con un console log
    // console.log(finalPrice);
    alert("Il prezzo del biglietto è di € " + finalPrice);
}