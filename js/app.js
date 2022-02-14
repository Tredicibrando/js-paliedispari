// console.log('ciao')

// Palindroma:
// Chiedere all'utente di inserire una parola e creare 
// una funzione per capire se la parola inserita è palindroma */  


// step 1 : chiedere all'utente di inserire una parola
// step 2 : creare variabile parola utente
// step 3 : cercare funzione che mi da il contrario della parola inserita
// step 4 : creo una variabile con l'input della parola utente flippata
// step 5 : IF parola utente == parola flippata console.log('la parola è palindroma')
    


let userWord = prompt('inserisci la tua parola');
let wordSplitted = userWord.split("");
let palindroma = wordSplitted.reverse("");
palindroma = palindroma.join("");



console.log(userWord)
console.log(wordSplitted)
console.log (palindroma)

if (userWord == palindroma){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}


// if (userWord === palindroma){
//     console.log(userWord)
// } else if (userWord !== palindroma){
//     console.log()
// } else {
//     console.log()
// }





