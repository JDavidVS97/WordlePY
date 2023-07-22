let lista = ["ARBOL", "ANGEL", "MARCO", "COMAS", "ARCOS", "ALOHA"]
//let palabra = "ARBOL"
let palabra = lista [Math.floor(Math.random()*lista.length)] //primero que me genere un numero ramdom luego que lo redondee y luego tome un numero de mi array lista 
//alert(palabra)
let intentos = 6
const API = "https://random-word-api.herokuapp.com/word?length=5&lang=es"

fetch(API)
    .then(response => response.json()) // => es una funcion anónima
    .then(response => {
        console.log(response)
        palabra = response [0].toUpperCase()
        console.log(palabra)    
    })
    .catch(err => palabra = lista[Math.floor(Math.ramdom()*lista.length)])


const BOTON = document.getElementById("guess-button")
BOTON.addEventListener("click", intentar)

function intentar(){
    const GRID = document.getElementById("grid")
    const ROW = document.createElement("div")//sirve para crear un elemento, en este caso un div
    ROW.className = "row" // a ese mismo div le asignamos la clase "row"
    const INTENTO = leerIntento()
    if (INTENTO == palabra){
        terminar("<h1>Ganaste! :D</h1>")
        GRID.style.display = "none"
        return 
    }
    for (let i in palabra){ //sirve para recorrer letra por letra en la palabra ingresada.
        const SPAN = document.createElement("span")
        SPAN.className = "letter"
        if (palabra[i]==INTENTO[i]){
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "green"
        }
        //si no esta en el lugar indicado, verificar si existe en la palabra e imprimir "amarillo"; si no está en la palabra imprimir "gris"
        else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "yellow"
            //alert(INTENTO[i]+" amarillo")
        }
        else {
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "grey"
            //alert(INTENTO[i]+" gris")
        }
        ROW.appendChild(SPAN) //agrega
    }
    GRID.appendChild(ROW)//agrega
    intentos-- //sirve para restar en 1 la cantidad de intentos de nuestra variable definida 
    if (intentos==0){
        terminar("<h1>Perdiste!</h1>")
        GRID.style.display = "none"
    }
}

function leerIntento(){
    let intento = document.getElementById("guess-input").value
    intento = intento.toUpperCase()
    return intento 
}

function terminar(mensaje){
    BOTON.disabled = true // para deshabilitar el boton una vez que nos quedemos sin intentos 
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = mensaje
}

