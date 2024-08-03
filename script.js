//obtenemos un número al azar del 1 al 100
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0



//esta acción se va a ejecutar cuando se haga click en el botón comprobar
function resultado(){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = "Por favor, introduce un número válido entre 1 y 100"
        mensaje.style.color = 'red'
        return
    }
    if(numeroIngresado == numeroAzar){
        mensaje.textContent = "¡Felicitaciones! ¡Has adivinado el número!";
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = "¡Más alto! El número es mayor al que dijiste";
        mensaje.style.color = 'red';    
    }else{
        mensaje.textContent = "¡Más abajo! El número es menor al que dijiste ";
        mensaje.style.color = 'red';
    }



}
