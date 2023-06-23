function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("white");
  fill ("rgb(245,29,29)");
  textSize (64);
  textAlign (CENTER, CENTER);
  
  let maximo = width;
  let monimo = 0;
  let palavra = "me da 20 pontos em fisica"; 
  let letras = map (mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, letras);
  text (parcial, 400, 400);
}