/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log("-------------- ESERCIZIO 1 --------------");

function area(l1, l2) {
  let calcolo = l1 * l2;
  return `L'area di un quadrato ${l1}x${l2} è di ${calcolo}`;
}

console.log(area(5, 7));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log("-------------- ESERCIZIO 2 --------------");

function crazySum(a, b) {
  let somma = a + b;
  if (a === b) {
    somma = somma * 3;
    risposta = `Dato che i due valori sono uguali la somma per tre fa: ${somma}`;
  } else {
    risposta = `I valori sono diversi tra loro, la loro somma è: ${somma}`;
  }
  return risposta;
}

console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("-------------- ESERCIZIO 3 --------------");

function crazyDiff(a, b) {
  let differenza = Math.abs(a) - Math.abs(b);
  if (b > 19) {
    differenza = differenza * 3;
    risposta = `Il secondo valore è maggiore di 19, quindi moltiplico per tre: ${Math.abs(
      differenza
    )}`;
  } else {
    risposta = `Il secondo valore è minore o uguale 19: ${Math.abs(
      differenza
    )}`;
  }
  return risposta;
}

console.log(crazyDiff(15, 19));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("-------------- ESERCIZIO 4 --------------");

function boundary(n) {
  if (typeof n === "number") {
    switch (true) {
      case n > 20 && n <= 100:
        risultato = true;
        break;
      case n === 400:
        risultato = true;
        break;
      default:
        risultato = false;
        break;
    }
  } else {
    risultato = "n non è un numero";
  }
  return risultato;
}

console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log("-------------- ESERCIZIO 5 --------------");

function epify(stringa) {
  if (stringa.indexOf("EPICODE") >= 0) {
    restituisci = stringa;
  } else {
    restituisci = `EPICODE ${stringa}`;
  }
  return restituisci;
}

console.log(epify("EPICODE Ciao a tutti"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("-------------- ESERCIZIO 6 --------------");

function check3and7(n) {
  if (typeof n !== "number" || n < 0) {
    risultato = "Il valore inserito non è un numero o è negativo";
  } else {
    switch (0) {
      case n % 3:
        risultato = "Il valore inserito è un multiplo di 3";
        break;
      case n % 7:
        risultato = "Il valore inserito è un multiplo di 7";
        break;
      default:
        risultato = "Il valore inserito non è multiplo di 3 o di 7";
    }
  }
  return risultato;
}

console.log(check3and7(14));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("-------------- ESERCIZIO 7 --------------");

function reverseString(stringa) {
  const arrayChars = [];
  for (let i = 0; i < stringa.length; i++) {
    arrayChars.unshift(stringa.charAt(i));
    risultato = arrayChars.join("");
  }
  return risultato;
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log("-------------- ESERCIZIO 8 --------------");

function upperFirst(stringa8) {
  const array8 = stringa8.split(" ");
  for (let i = 0; i < array8.length; i++) {
    array8[i] = array8[i].charAt(0).toUpperCase() + array8[i].slice(1);
  }
  return array8.join(" ");
}

console.log(upperFirst("ciao a tutti mi chiamo vincenzo maiorana"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("-------------- ESERCIZIO 9 --------------");

function cutString(stringa9) {
  let lastCharString = stringa9.length - 1;
  return stringa9.slice(1, lastCharString);
}

console.log(cutString("Ho imparato a fare questa cosa su JavaScript"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("-------------- ESERCIZIO 10 --------------");

function giveMeRandom(nr) {
  const numeriRandom = [];
  for (let i = 0; i < nr; i++) {
    numeriRandom.push(Math.floor(Math.random() * 10 + 1));
  }
  return numeriRandom;
}
console.log(giveMeRandom(5));
