let numeroKm = parseInt (prompt('quanti chilometri vuoi percorrere?'));
console.log(numeroKm);

let userAge = parseInt (prompt('quanti anni hai?'));
console.log(userAge);

let ticketPrice = (numeroKm * 0.21);
console.log(ticketPrice);

let scontoSenior = (ticketPrice / 100 * 40);
let scontoMinore = (ticketPrice / 100 * 20);

if (userAge >= 65){
console.log(ticketPrice - scontoSenior);

}else{
    console.log(numeroKm * 0.21);
    
}if (userAge < 18){
    console.log(ticketPrice - scontoMinore);
} 


document.getElementById('output').innerHTML = ((ticketPrice - scontoMinore,ticketPrice - scontoSenior ));