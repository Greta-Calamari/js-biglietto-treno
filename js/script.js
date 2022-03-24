let numeroKm = parseInt (prompt('quanti chilometri vuoi percorrere?'));
console.log(numeroKm);

let userAge = parseInt (prompt('quanti anni hai?'));
console.log(userAge);

let ticketPrice = (numeroKm * 0.21);
console.log(ticketPrice);

let scontoSenior = (ticketPrice / 100 * 40);
let scontoMinore = (ticketPrice / 100 * 20);

if (userAge >= 65){
    document.getElementById('output').innerHTML = (ticketPrice - scontoSenior)+ '€';
    console.log(ticketPrice - scontoSenior);

}else if (userAge < 18){
    document.getElementById('output').innerHTML = (ticketPrice - scontoMinore) + '€';
    console.log(ticketPrice - scontoMinore);
    
}else 
  document.getElementById('output').innerHTML = ticketPrice + '€';
  console.log(ticketPrice);
   
    





