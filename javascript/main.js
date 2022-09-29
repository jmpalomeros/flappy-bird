// * GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d") //para limpiar el canvas creo la variable
const startScreen = document.querySelector("#splash-screen")
const startBtn = document.querySelector("#start-btn")
const gameOverScreen = document.querySelector ("#gameover-screen")

const restartBtn = document.querySelector("#restart-btn")

let gameObj;//se crea e forma global pero el juego no ha iniciado
//creo estas dos variables para ocultar las plantalla inicial y el canvas



// * STATE MANAGEMENT FUNCTIONS

//creo una funcion que oculte la pantalla inicial y muestre el canvas para despues iniciar el juego

const startGame = () =>{
    //console.log ("inciando el juego")

    //ocultar la pantalla inicial cuando pincho start y desaparece
    startScreen.style.display = "none"

    //para mostar el canvas

    canvas.style.display = "block"

    //crear una nueva version del juego
    gameObj = new Game () //aqui creo el nuevo objeto sobre la base del objeto GAME
   // console.log(gameObj)
    gameObj.gameLoop() //se ejecuta el bucle. lo invoco por dotacion por puntos al ser un metodo de un objeto
    //iniciar el juego
    //ejecutar el metodo gameLoop


}
//esta funcion se ejecuta cuando hago click con el addEvent de startBtn

const restartGame = () => {

    startScreen.style.display = "flex"
    gameOverScreen.style.display = "none"
    

}

//trabajamos sobre el sistema de clases para permitir crear nuevas versiones del juego limpiando las anteriores 
//antes de iniciar el juego creamos la clase que contendrá todas los elementos del juegos
//este archivo solo controla los estados del juego, en otro archivo creo las clases




// * ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame)
restartBtn.addEventListener("click", restartGame)
//para q el pollo vaya a volar 
window.addEventListener("keydown", (event)=>{
    if (event.code === "Space"){
       // console.log ("pollo volando") para comprobar que el espacio funciona
    gameObj.polloObj.saltoPollo()
    //aqui tengo que invocar la funcion para que el pollo vuele
    //si lo pongo en el GAMELOOP estaria volando todo el rato
    //accedo a el mediante una variable global y entro por notacion puntos al ser objeto

    }
})







