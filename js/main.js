// chiedere quanti km vuoi percorrere

//chiedere età  
// calcolo prezzo del viaggio
// Il prezzo del biglietto è definito in base ai km (0.21 € al km).
// se ha meno di 18 anni va applicato uno sconto del 20%
// se ha piu' di 65 anni va applicato uno sconto del 40%
// 'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// 
// 

// Il numero di chilometri da percorrere
const userkm = parseInt("quanti km vuoi fare?");
console.log(`quanti km `, userkm);

// Età del passeggero
const userage = parseInt("quanti anni hai?");
console.log(`quanti anni `, userage);
const pricekm = 0.21;
let price = userkm * pricekm;
console.log("il prezzo é", price);
if (userage > 18) {
    //  sconto minorenni
    const underdiciotto = 20 / 100;

    // calcolo prezzo scontato
    const discountamount18 = price * underdiciotto;
    console.log("lo sconto é", discountamount18);
    price = price - discountamount18;


}
if (userage < 65) {
    // sconto minorenni
    const oversixtyfive = 40 / 100;
    // calcolo prezzo scontato
    const discountamount65 = price * oversixtyfive;
    console.log("lo sconto é", oversixtyfive);
    price = price - oversixtyfive;

}

document.getElementById('info').innerHTML = price;