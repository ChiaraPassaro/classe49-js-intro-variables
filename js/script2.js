// chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

// chiedere all'utente di inserire la sua eta
// let eta = prompt('Inserisci la tua età');
// console.log(eta);
// inserisco l'anno attuale
// let annoAttuale = 2021;
// anno meno eta
// let annoNascita = annoAttuale - parseInt(eta);
// console.log(annoNascita);

// document.writeln('Il tuo anno di nascita è il ' + annoNascita);
// document.getElementById('mio_id').innerHTML = document.getElementById('mio_id').innerHTML + '<h1> Il tuo anno di nascita è il ' + annoNascita + '</h1>';

// let mioNome = "Chiara";
// mioNome = mioNome + ' Maria';

// let htmlMioDiv = document.getElementById('mio_id').innerHTML;
// console.log(htmlMioDiv);
// console.log(document.getElementById('mio_id'));



// Chiediamo all'utente come si chiama e poi scriviamo in pagina e in console un saluto adeguato.
// Chiediamo all'utente
let nomeUtente = prompt('Inserisci il tuo nome');
console.log('Nome Utente ' + nomeUtente);
// console.log('Nome Utente ', nomeUtente);
let saluto = `
  <h1>Benvenuto sul nostro sito <span class="rosso">${nomeUtente}</span>!</h1>
  `;


console.log(saluto);
document.getElementById('mio_id').innerHTML = saluto;


const primoNumero = 10;
const secondoNumero = 13;

let somma = primoNumero + secondoNumero;
let sottrazione = primoNumero - secondoNumero;
let divione = primoNumero / secondoNumero;
let moltiplicazione = primoNumero * (secondoNumero + 10);

console.log(somma, sottrazione, divione, moltiplicazione);



// Chiedi all’utente il suo nome,
//   poi chiedi il suo cognome,
//     poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21