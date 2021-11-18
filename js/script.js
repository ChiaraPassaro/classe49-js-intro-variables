//Script esterno
// alert('Ciao');//funzione
console.log('Ciao'); //metodo

//Creazione
document.writeln("Ciao in HTML"); //metodo

//Manipolazione
// console.log(document.getElementById('mio_id').innerHTML);

// document.getElementById('mio_id').innerHTML = '<h1>Qualcosa</h1>';

// const myFirstVar = 'Mia variabile Const';
// console.log(myFirstVar);
// myFirstVar = 'Qualcosa';

// let mySecondVariable = 'Mia variabile let';
// console.log(mySecondVariable);
// mySecondVariable = 'Testo modificato';
// console.log(mySecondVariable);


// console.log(varPippo);
// var varPippo = 'Pippo';

// let varPippoLet;
// console.log(varPippoLet);
// varPippoLet = 'Inserisco il dato';
// console.log(varPippoLet);



// dichiarazione variabile
// let miaStringa;

// assegnazione
// miaStringa = 'ciao';
// utilizzo/richiamo
// alert(miaStringa);

// assegnazione
// miaStringa = 'arrivederci';
// utilizzo/richiamo
// alert(miaStringa);

let text = 5;
let number = 5;
console.log(text);
console.log(number);
let sum = text + number;
console.log(sum);


let longText = `${text} 
        +
          ${number} 
    = ${sum}`;
console.log(longText);



const textPrompt = parseInt(prompt('Inserisci un numero'));


console.log(textPrompt);
console.log(textPrompt + 10);