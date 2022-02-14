//palindroma

// Palindroma:
// Chiedere all'utente di inserire una parola e creare 
// una funzione per capire se la parola inserita è palindroma */  


// step 1 : chiedere all'utente di inserire una parola
// step 2 : creare variabile parola utente
// step 3 : cercare funzione che mi da il contrario della parola inserita
// step 4 : creo una variabile con l'input della parola utente flippata
// step 5 : IF parola utente == parola flippata console.log('la parola è palindroma')
    


// const userWord = prompt('inserisci la tua parola').toLowerCase();


// function palidrom (parola){
//     parola = userWord
//     let wordSplitted = userWord.split("");
//     let palindroma = wordSplitted.reverse("");
//     palindroma = palindroma.join("");

//     console.log(parola)
//     console.log(wordSplitted)
//     console.log (palindroma)

//     if (userWord == palindroma){
//         console.log('la parola è palindroma');
//     } else {
//         console.log('la parola non è palindroma');
//     }

// }

// console.log(palidrom(userWord))




// pari e dispari

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
//Generiamo un numero random (sempre da 1 a 5) per il computer 
// (usando una funzione). Sommiamo i due numeri 
//Stabiliamo se la somma dei due numeri è pari o dispari 
//(usando una funzione) Dichiariamo chi ha vinto.

//step 1 : userInput -- numero da 1 a 5
//step 2 : randomNumber -- genero un numero randomico tra 1 e 5
//step 3 : sommaInput == userInput + randomNumber 
//step 4 : dichiaro variabile pari in :false; 
//step 4 : pongo la condizione IF ( sommaInput % 2 == 0 ) che avrà dentro la variabile =true;
//step 5 : console.log

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let userInput = parseInt(prompt('inserisci un numero da 1 a 5'));
let randomNumber = getRandomIntInclusive(1,5);
let sommaInput = 0;
let sommaPari = false;

console.log(userInput, randomNumber);

if (!isNaN(userInput)) {
    sommaInput = userInput + randomNumber;
 } 

 console.log(sommaInput);

if ( sommaInput % 2 == 0){
    sommaPari = true;
    console.log(sommaInput += ' è pari');
} else {
     console.log(sommaInput += ' è dispari');
 }


function checkpari ( userInput ){
    
}
 









