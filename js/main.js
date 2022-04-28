// Chiedere all'utente quanti km deve percorrere e inserirli in una variabile1
const distance = Number(prompt("Quanti KM devi percorrere?"));
console.log(distance)
// Chiedere all'utente quanti anni ha e inserirli in una variabile2
const age = Number(prompt("Quanti anni hai?"));
console.log(age)
// SE l'utente ha meno di 18 anni allora calcolare i km*0,21 euro e applicare uno sconto del 20%
// ALTRIMENTI SE l'utente ha più o uguale 65 anni allora calcolare i km*0,21 euro e applicare uno sconto del 40%
//SENNO' calcolare i km*0,21 euro e non applicare nessuno sconto.
let price
if (age < 18) {
    price = (distance * 0.21)
    price -= (price * 0.2)
} else if (age >= 65) {
    price = (distance * 0.21)
    price -= (price * 0.4)
} else {
    price = (distance * 0.21)
}
// Il prezzo finale deve avere un massimo di due decimali (quindi euro e centesimi).
document.getElementById("final_price").innerHTML += `${price.toFixed(2)} euro`
