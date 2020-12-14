function preload(){
  for (let i=0; i<=8;i++){
    imagemCenario[i] = loadImage(imagemCenarioCamadas[i]);
  }
  imagemPersonagem = loadImage('img/personagem/Run.png');
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  cenarioCamada0 = new Cenario(imagemCenario[0], 1);
  cenarioCamada1 = new Cenario(imagemCenario[1], 0.5);
  cenarioCamada2 = new Cenario(imagemCenario[2], 1);
  cenarioCamada3 = new Cenario(imagemCenario[3], 0.5);
  cenarioCamada4 = new Cenario(imagemCenario[4], 1);
  cenarioCamada5 = new Cenario(imagemCenario[5], 0.5);
  cenarioCamada6 = new Cenario(imagemCenario[6], 1);
  cenarioCamada7 = new Cenario(imagemCenario[7], 0.5);
  cenarioCamada8 = new Cenario(imagemCenario[8], 1);
  personagem = new Personagem(imagemPersonagem);
  
  //personagem = new Personagem(imagemPersonagem);
}

function draw() {
    
  cenarioCamada0.move();
  cenarioCamada0.exibe();
  cenarioCamada1.move();
  cenarioCamada1.exibe();
  cenarioCamada2.move();
  cenarioCamada2.exibe();
  cenarioCamada3.move();
  cenarioCamada3.exibe();
  cenarioCamada4.move();
  cenarioCamada4.exibe();
  cenarioCamada5.move();
  cenarioCamada5.exibe();
  cenarioCamada6.move();
  cenarioCamada6.exibe();
  cenarioCamada7.move();
  cenarioCamada7.exibe();
  cenarioCamada8.move();
  cenarioCamada8.exibe();
  personagem.exibe();
  
 
  
  
  
  
  
}