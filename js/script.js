let numeroKm = parseInt (prompt('quanti chilometri vuoi percorrere?'));
console.log(numeroKm);

let userAge = parseInt (prompt('quanti anni hai?'))
console.log(userAge);

let ticketPrice = (numeroKm * 0.21);
console.log(ticketPrice);

if (userAge > 65){
    console.log(ticketPrice / 100 * 40 - ticketPrice)

}else{
    console.log(numeroKm * 0.21)
}



if
