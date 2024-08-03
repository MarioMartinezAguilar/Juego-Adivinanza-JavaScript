# TITULO DEL PROYECTO    

**Juego de la adivinanza con JavaScript**

# DESCRIPCIÓN DEL PROYECTO
**En este proyecto hicimos un juego de adivinar un número del uno al cien, todo de forma web usando JavaScript para su funcionalidad**

# DETALLES DEL PROYECTO (index.html)
**En nuestro proyecto como página principal contamos con nuestro index.html en donde pudimos realizar la interacción del usuario con un simple juego donde podemos observar un input y a su lado un botón, texto que nos dice que el usuario introduzca un número del uno al cien y luego en el botón se trata de comprobar si el número que puso el usuario es el que de manera aleatoria el sistema puso de forma oculta y si lo ha lograda adivinar , además también podemos observar la cantidad de intentos que el usuario va teniendo cuando intenta adivinar el número , ya que al introducir el numero el sistema automáticamente te manda un texto diciéndote que el número es más alto o más bajo del número que puso el usuario para lograr adivinarlo, ya cuando logras adivinarlo el sistema te manda un texto felicitándote porque ya has logrado adivinar como puedes ver es solo texto un input ,un botón toda la magia lo hacemos con JavaScript**

# DETALLES DEL PROYECTO (styles.css)
**En los estilos css fue solo para darle diseño a la página de nuestro juego, es decir colores, tamaño del input del botón, fondo etc. También la separación con márgenes de un elemento HTML a otro elemento HTML, así como su tipo de letra, su tamaño y su color.(Puedes checar nuestro archivo styles.css de nuestro repositorio para comprenderlo un poco mejor)**

# DETALLES DEL PROYECTO (script.js)
**Toda la funcionalidad del juego lo hacemos atreves de JavaScript, en nuestro archivo script.js tenemos primero lo que un método matemático para poder decirle al usuario que introduzca un número del 1 al 100 así mismo el método random para que el sistema lo genere de manera aleatoria. después tenemos lo que es la creación de algunas variables que nos van a permitir la comunicación entre los elementos HTML con JavaScript para poder darles funcionamiento atreves de la propiedad document.getElementById para cada elemento de la página, al final tenemos lo que es una función llamada resultado esta función nos va a permitir ejecutar alguna acción en especial cuando el usuario haga clic en el botón comprobar.**

# DETALLES DEL PROYECTO (script.js(manejo de if))
**En esta parte de nuestro archivo script.js hacemos uso de las sentencias if else o else if(anidados).Aquí primero nos aseguramos que el número sea de tipo Int y no string con la función de JavaScript (ParseInt), ahora si en nuestro primer if lo que hacemos es validar que el usuario ingrese un numero valido y que sea del 1 al 100, no ingrese letras u otra cosa ya que al hacerlo mostramos un mensaje el página que diga introduce un numero correcto esto gracias a la propiedad textContent de JavaScript (nos crea un texto en el HTML). En el segundo if se valida que el número que introduce el usuario sea igual al número que genero el sistema al azar e igual mandamos un mensaje que ha adivinado el número además deshabilitamos el input para que no se pueda escribir, en el else if validamos nuevamente pero ahora decimos si el número ingresado es menor al número al azar igual nos muestre un mensaje que diga que el número es más alto al que el usuario introduce, y finalmente en el else validamos lo contrario es decir más abajo el número es menor al que introdujiste ya con un mensaje no hace falta volver a comparar(checar nuestro archivo script.js para mayor detalle)**

### Lista De Tecnologías Y Herramientas Usadas En Nuestro Proyecto  

1. HTML
2. CSS
3. JavaScript(Reforzar)   
4. GitHub
5. Herramienta de Visual Studio Code(live Server)

*Elaborado Por: Mario Martínez Aguilar*
 
