//https://youtu.be/7gNTMvduExI
//https://www.youtube.com/watch?v=-otK1Jd0tOw
let pantallas = 0;
let textos = [];
let imagenes = [];
let desiciones = [
  [4, "creerle", 8, "rechazarlo", 5],
  [11, "no pagarle", 15, "pagarle", 12],
  [17, "ir sin oro", 21, "ir con oro", 18]
];
let sonidoAGIW, sonidoCreditos;

function setup() {
  createCanvas(640, 480);
  sonidoAGIW.setVolume(0.5);
  sonidoCreditos.setVolume(0.5);
}

function preload() {
  textos = loadStrings("textos.txt");
  for (let i = 0; i < 27; i++) {
    imagenes [i] = loadImage("data/img"+i+".png");
  }
  sonidoAGIW = loadSound("data/sonidoAGIW.mp3");
  sonidoCreditos = loadSound("data/sonidoCreditos.mp3");
}

function draw() {
  background(180);
  image(imagenes[pantallas], 0, 0, width, height);
  dibujarHud();
}

function dibujarBotonesDesiciones(pantallaActual) {
  for (i =0; i<desiciones.length; i++) {
    if (pantallaActual === desiciones[i][0]) {
      dibujarBotonDesiciones(520, 350, desiciones[i][1]);
      dibujarBotonDesiciones(520, 420, desiciones[i][3]);
    }
  }
}

function dibujarBotonDesiciones(x, y, texto) {
  fill(255);
  rect(x, y, 100, 40, 10);
  fill(0);
  textSize(15);
  text(texto, x+10, y+20);
}

function dibujarBotonEmpezarYCreditos() {
  fill(255);
  rect(230, 180, 150, 50, 10);
  rect(230, 250, 150, 50, 10);
  fill(0);
  textSize(20)
    text("Empezar", 230+40, 180+30);
  text("Creditos", 230+40, 250+30);
}

function dibujarBotonSiguienteYReiniciar() {
  fill(255);
  rect(520, 420, 100, 50, 10)
    fill(0);
  textSize(15)
    if (!(pantallas === 7 ||pantallas === 14 ||pantallas === 20 ||pantallas === 25 ||pantallas === 26)) {
    text("siguiente", 520+20, 420+30);
  } else {
    text("volver al inicio", 522, 420+30);
  }
}

function mouseReleased() {
  if (!(pantallas === 0 || pantallas === 4 || pantallas === 11 || pantallas === 17)) {
    botonSiguienteYReiniciar();
  } else if (pantallas === 0) {
    botonEmpezayYCreditos();
  } else {
    botonesDesiciones(pantallas);
  }
  if (pantallas > 26) {
    pantallas = 0;
  }
}

function dibujarHud() {
  if (pantallas > 0 && pantallas <26) {
    fill(0, 100);
    rect(0, 380, 640, 480);
  }
  if (!(pantallas === 0 || pantallas === 4 || pantallas === 11 || pantallas === 17)) {
    dibujarBotonSiguienteYReiniciar()
  } else if (pantallas === 0) {
    dibujarBotonEmpezarYCreditos();
  } else {
    dibujarBotonesDesiciones(pantallas);
  }
  fill(255);
  if (textos[pantallas -1]) {
    textSize(12);
    text(textos[pantallas -1], 20, 390, 485, 300);
  } else if(pantallas ===26){
    fill(0);
    text("El presente trabajo se inspira en la fábula tradicional El flautista de Hamelín, relato de origen germánico popularizado por los Hermanos Grimm.\nLa programación y el desarrollo visual de esta adaptación interactiva estuvieron a cargo de:\nGerónimo Goñi (Legajo Nº 94758/7) y Gaspar Varetta (Legajo Nº 89453/0).\npiezas musicales utilizadas pertenecen a la banda sonora del videojuego The Legend of Zelda: Ocarina of Time, específicamente las composiciones “Ocarina of Time” y “Fairy Fountain”, de Koji Kondo.", 50, 100,485, 300);
  }
}
