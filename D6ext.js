// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

console.log("-------------- EXTRA 1 --------------");

const quantiCasuali = 6;

function giveMeRandom(nr) {
  const numeriRandom = [];
  for (let i = 0; i < nr; i++) {
    numeriRandom.push(Math.floor(Math.random() * 10 + 1));
  }
  return numeriRandom;
}

function checkArray(array1) {
  let sommaDei5 = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 5) {
      console.log(`Il valore ${i} è maggiore di 5`);
      sommaDei5 += array1[i];
    } else {
      console.log(`Il valore ${i} è minore o uguale a 5`);
    }
  }
  return sommaDei5;
}

const arrayToCheck = giveMeRandom(quantiCasuali);
console.log(arrayToCheck);
console.log(checkArray(arrayToCheck));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

console.log("-------------- EXTRA 2 --------------");

const shoppingCart = [
  {
    price: 23.9,
    name: "Camicia di Seta",
    id: 12658,
    quantity: 1,
  },
  {
    price: 57.9,
    name: "Cappotto di Lana",
    id: 57935,
    quantity: 2,
  },
  {
    price: 9.87,
    name: "T-Shirt",
    id: 98553,
    quantity: 5,
  },
];

function shoppingCartTotal(carrello) {
  let totaleCarrello = 0;
  for (let i = 0; i < carrello.length; i++) {
    punit = carrello[i].price;
    qty = carrello[i].quantity;
    ptot = punit * qty;
    totaleCarrello += ptot;
  }
  return Number(totaleCarrello.toFixed(2));
}
console.log(shoppingCart);
console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

console.log("-------------- EXTRA 3 --------------");

const nuovoProdotto = {
  price: 19.32,
  name: "Felpa con cappuccio",
  id: 12566,
  quantity: 2,
};

function addToShoppingCart(carrello, prodotto) {
  carrello.push(prodotto);
  let prodottiTotali = 0;
  for (let i = 0; i < carrello.length; i++) {
    prodottiTotali = prodottiTotali + carrello[i].quantity;
  }
  return `Aggiunto! Adesso hai ${carrello.length} tipi di prodotti nel carrello, per un totale di ${prodottiTotali} elementi`;
}

console.log(addToShoppingCart(shoppingCart, nuovoProdotto));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

console.log("-------------- EXTRA 4 --------------");

function maxShoppingCart(carrello) {
  let max = 0;
  const oggetto = [];
  for (let i = 0; i < carrello.length; i++) {
    if (carrello[i].price > max) {
      max = carrello[i].price;
      oggetto[0] = carrello[i];
    }
  }
  return oggetto[0];
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

console.log("-------------- EXTRA 5 --------------");

function latestShoppingCart(carrello) {
  posizioneUltimo = carrello.length - 1;
  return carrello[posizioneUltimo];
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

console.log("-------------- EXTRA 6 --------------");

function loopUntil(valore6) {
  ncasuale = 0;
  array3x = [0, 0, 0];
  while (array3x[0] < valore6 || array3x[1] < valore6 || array3x[2] < valore6) {
    ncasuale = Math.floor(Math.random() * 10);
    //  console.log(ncasuale); //COMMENTATO PER PULIZIA NELL'OUTPUT
    array3x.shift();
    array3x.push(ncasuale);
  }
  return array3x;
}

console.log(loopUntil(7));
console.log(
  "I numeri casuali generati sono stati commentati per pulizia dell'output, rimuovere il commento alla riga 151"
);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

console.log("-------------- EXTRA 7 --------------");

const arrayMedia = [0, 7, "ciao", null, 8, 7, 8, 8];
function average(array) {
  let sumavg = 0;
  let i2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sumavg += array[i];
      i2++;
    }
  }
  let avg = sumavg / i2;
  return avg;
}

console.log(average(arrayMedia));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

console.log("-------------- EXTRA 8 --------------");

const stringeLunghe = [
  `ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet`,
  `magni vero iure quae ipsam aliquam quia, non quaerat voluptates harum`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempora, rem odit nemo totam cupiditate doloremque libero`,
];

function longest(arrayStringhe) {
  const ultimaLenght = {
    posizione: 0,
    lunghezza: 0,
    stringa: "",
  };
  for (let i = 0; i < arrayStringhe.length; i++) {
    if (arrayStringhe[i].length > ultimaLenght.lunghezza) {
      ultimaLenght.lunghezza = arrayStringhe[i].length;
      ultimaLenght.posizione = i;
      ultimaLenght.stringa = arrayStringhe[i];
    }
  }
  return ultimaLenght;
}
console.log(longest(stringeLunghe));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

console.log("-------------- EXTRA 9 --------------");

const contenuto = "Sicuramente questo è un SPAM messaggio";

function antiSpam(emailContent) {
  if (emailContent.indexOf("SPAM") >= 0 || emailContent.indexOf("SCAM") >= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(antiSpam(contenuto));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

console.log("-------------- EXTRA 10 --------------");

const dataAttuale = Date();

console.log("Data attuale:", dataAttuale);

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
