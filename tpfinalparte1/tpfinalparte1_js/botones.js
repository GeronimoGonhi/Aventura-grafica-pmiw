function botonesDesiciones() {
  for (i =0; i<desiciones.length; i++) {
    if (pantallas === desiciones[i][0]) {
      if (mouseX > 520 && mouseX < 620 && mouseY >349 && mouseY < 389) {
        pantallas = desiciones[i][2];
      }
      if (mouseX > 520 && mouseX < 620 && mouseY >420 && mouseY < 460) {
        pantallas = desiciones[i][4];
      }
    }
  }
}

function botonSiguienteYReiniciar() {
  if (mouseX > 520 && mouseX<620 && mouseY >420 && mouseY < 470) {
    if (!(pantallas === 7 || pantallas === 14 || pantallas === 20 || pantallas === 25 || pantallas === 26)) {
      pantallas+=1;
    } else {
      pantallas = 0;
      sonidoAGIW.stop();
      sonidoCreditos.stop();
    }
  }
}

function botonEmpezayYCreditos() {
  if (mouseX > 230 && mouseX<380 && mouseY >181 && mouseY < 230) {
    pantallas+=1;
    sonidoAGIW.loop();
  } else if (mouseX > 230 && mouseX<380 && mouseY >250 && mouseY < 300) {
    pantallas =26;
    sonidoCreditos.loop();
  }
}
