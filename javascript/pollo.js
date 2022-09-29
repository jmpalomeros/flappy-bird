class pollo {
  constructor() {
    //propiedades del pollo
    this.img = new Image();
    this.img.src = "./images/flappy.png";
    //posicion de salida en pantalla
    this.x = 50; //posicion x del pollo
    this.y = 50; //posicion en eje y
    //ancho y alto del pollo. espacio que ocupa en pantalla
    this.w = 40;
    this.h = 35;
    this.speed = 1.5; //si pongo 1 va mas lento y pongo 3 mas rapido
    this.jumpSpeed = 40;
  }

  //metodos y acciones del pollo
  //dibjar pollo
  drawPollo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  //gravedad
  gravedadPollo = () => {
    this.y = this.y + this.speed; //le paso la propiedad velocidad para que sume 2
  };
  //salto del pollo lo muevo y hago aqui
  saltoPollo = () => {
    this.y = this.y - this.jumpSpeed;
  };
}
