class Game {
  //pienso los elementos y acciones que necesita el jeugo
  constructor() {
    //aqui pondré las propiedades o elementos del jeugo

    //fondo
    this.fondo = new Image();
    this.fondo.src = "images/bg.png"; //paso la ubicacion de la imagen dependiendo de dond esten las imagenes  ../ si son de estilos

    //pollo

    //creo una nueva clase para generar nuevos elementos de la clase pollo
    //para ello creo nuevo archivo

    this.polloObj = new pollo();
    //creando un nuevo objeto de la clase pollo que va a ser elemento del juego
    //si lo quiero dibujar, accedo al objeto desde la seccion 3.dibjo elementos del GAMELOOP

    // tubos
    //creo una nueva clase para los tubos en archivo separado

    //this.tuboObj = new Tubo();
    //creo un primer tubo como prueba. como necesito varios creo un array de tubos

    this.tubeArr = []
    this.frames = 0 //creo variable para controlar los tubos que van saliendo en pantalla
    this.isGameOn = true

    this.score = 0;


  }

  //aqui estarán todos los metodos o acciones del jueg
  //colision del pollo con tubos
  //pollo caiga al suelo  LOS HAGO EN LA CLASE POLLO
  //salto del pollo   LO HAGO EN CLASE POLLO
  //movimiento de los tubos
  //aumento del score (bonus)
  //aleteo del pollo y animacion (bonus bonus)
  // recursion del juego : primer metodo que creo

  //funcion para dibujar el fondo

  polloTuboCollision = () => {
    //como los tubos son un array, tengo q acceder a todos ellos y comparar con el pollo
    this.tubeArr.forEach ((eachTubo) => {
        
        //voy a usar codigo de mdn q ha desarrollado ya la colision 
        if (
            this.polloObj.x < eachTubo.x + eachTubo.w &&
            this.polloObj.x + this.polloObj.w > eachTubo.x &&
            this.polloObj.y < eachTubo.y + eachTubo.h &&
            this.polloObj.h + this.polloObj.y > eachTubo.y
          ) {
            // Collision detected!
            console.log ( "Collision!")
            this.gameOver()
          }
    })

    
  }

  gameOver = () => {
    //funcion para que salga el Canvas y salga la pantalla final cuando 
    // detener el juego
    this.isGameOn = false; //esto finaliza el juego
    //ocultar el canvas
    canvas.style.display = "none"
    //mostrar pantalla final
    gameOverScreen.style.display = "flex"

    //pongo aqui el final del juego pq es una accion del juego por eso no va a Main, dnd estan funciones que dependen de la interaccion con el usuario
  }

gameScore = ( ) => {
    if(this.tubeArr.length !== 0 && this.tubeArr[0].x <-50){
        //si el array no esta vacion y  el tubo llega al borde de array

        //1. inceremento el score
        this.score ++
        //console.log("score:" , this.score);

        //2. saco los tubos del array

       this.tubeArr.shift() //borra el tubo de arriba
        
        this.tubeArr.shift() //borra el tubo de abajo
        

        }
}

  addTubo = () => { //creo funcion para agragar tubos
    if(this.frames % 120 === 0){
        //esto significa que cada 3 (60 frames/por segundo x2 seg) seg saca un tubo nuevo 
        //al inicio, el array esta vacio y va agregando tubos

        //tubos de arriba
        //determinar la posicion de arriba
        let randomNum = Math.random() * -150
        let randomYint = Math.floor(randomNum)

        let nuevoTubo= new Tubo(randomYint, "arriba") //creo un nuevo tubo para agregar al array, creo un ojbeto nuevo y le paso parametro para tubo Y
        this.tubeArr.push(nuevoTubo) 
        //console.log(this.tubeArr) //vemos como los elementos se añaden al array
    
        //aqui tengo que trabjar para agregar los tubos por abajo al ser la funcion que agrega los tubos

        //tubo de abajo
        //determinamos la posicion de abajo
        let randomYint2 = randomYint + nuevoTubo.h + 100 //aqui paso las dimensiones del tubo abajo y los creo
        let tuboabajo = new Tubo(randomYint2, "abajo") //paso cm argumento el tubo y ya salen en pantall 
        this.tubeArr.push(tuboabajo)
        
        //console.log(this.tubeArr) //vemos como los elementos se añaden al array
    }   

  }

  
  
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };


  drawScore = () => { //aqui estoy creando el marcador
    ctx.font = "30px Arial"
    //pagar dibujar el texto, necesita 3 argmento, texto, posX y posY
    let scoreStr = `Score: ${this.score}`
    ctx.fillText (scoreStr, canvas.width * 0.5, 10)
  }

  checkPolloFall = () => {
    if (this.polloObj.y + this.polloObj.h > canvas.height) {
      this.gameOver()
    }
  }

  gameLoop = () => {

    this.frames = this.frames + 1

    //añado la propiedad de frames y le añado uno para controlar la frecuencia con la que saldrán tubos

    //console.log("ejecutando el juego") //para verificar que se ejecuta el loop
    //aqui esta todo el efecto de la recursion. Pasos para crearlo
    /*1. Limpiar el canvas
        2. acciones y movimientos de los elementos
        3.- dibujado de los elementos 
        4.- control de recursion*/

    //1. Limpiar el canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height); //limpio para darle la animacion, borrar y dibujar, borrar y dibujar
    //si no limpio el elemento estaria estatico

    //2. acciones y movimientos de los elementos

    this.polloObj.gravedadPollo(); //para que el pollo no caiga por debajo
    //this.tubeObj.moveTubo();//para que un solo tubo se mueva. con el array de tubos necesito hacer un forEch
    this.tubeArr.forEach((eachTubo)=>{
        eachTubo.moveTubo()
    }) //el array de tubos se recorre con el forEach

    this.addTubo() //añado la funcion de añadir tubo para sacarlo en pantalla
    this.polloTuboCollision()
    this.checkPolloFall()
    

    //3.- dibujado de los elementos

    this.drawFondo();
    this.polloObj.drawPollo();
    //this.tubeObj.drawTubo(); //este era para la prueba, cuando solo tenia un tubo
    this.tubeArr.forEach((eachTubo)=>{
        eachTubo.drawTubo()
    })


    this.gameScore()
    this.drawScore()
    //4. control de recursion
    //pong el condicional en la recursion para poder jugar, cuando sea false (en gameloop collision), pierdo
    if(this.isGameOn === true){
         requestAnimationFrame(this.gameLoop);
    }
   
  };
}

//aqui creo las clases del juego
