// chiedere quanti km vuoi percorrere

//chiedere età  
// calcolo prezzo del viaggio
// Il prezzo del biglietto è definito in base ai km (0.21 € al km).
// se ha meno di 18 anni va applicato uno sconto del 20%
// se ha piu' di 65 anni va applicato uno sconto del 40%
// 'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// 
// 
const km = parseInt(prompt("quanti km vuoi percorrere?"));
console.log(km);
const età = parseInt(prompt("quati anni hai?"));
console.log(età);
let price = km * (0, 21);
console.log(price);


if
    (età < 65) {
    price - 40 %;


}
if (età > 18) {
    price - 20 %;



}
document.getElementById('info').innerHTML = price;