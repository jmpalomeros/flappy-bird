class Tubo {
  constructor(yParam, orientation) {
    //propiedades del tubo
    this.img = new Image();
    if(orientation === "arriba"){
        this.img.src = "./images/obstacle_top.png";
    }
    else{
        this.img.src = "./images/obstacle_bottom.png"
    }
     
    this.x = canvas.width;
    //definimos posicion aleatoria para los tubos
    
    this.y = yParam;//ahora el valor ya no es 0 es aleatorio
    this.w = 50;
    this.h = 250;
    this.speed = 2;
  }

  //metodos y acciones de cada tubo

  drawTubo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveTubo = () => {
    this.x = this.x - this.speed

  }





}



/*formas de agregar tubos

1.- si es con setTimeOut tng que tener cuidado dond e y como lo agrego
pq si es dentro dl bucle se va a ejecutar 60 veces por seg
tendría q ponerlo en el main, no en objeto game

2.- agregar por posicion: cuando tubo llegue a tal pixel, añade. 
lo que pasa que tengo problema con el ultimo elemenot

3.- crear un controlador interno. Así lo hacemos. Planteamos un bucle 
para que vaya dibujando los tubos y los vaya moviendo.
todos los tubos van a estar guardados en el array 
y luego los borraremos.

*/