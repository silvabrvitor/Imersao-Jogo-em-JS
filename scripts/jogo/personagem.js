class Personagem{
  constructor(imagem){
    this.imagem = imagem;
    //this.matriz[]
  }
  
  exibe(){
    //image(this.imagem,-850, height-250, 0, 0, -900, -40,0);
    
    /*image(this.imagem, this.x, this.y, 
    this.largura, this.altura, this.matriz[this.frameAtual][0],this.matriz[this.frameAtual][1],
      this.larguraSprite, this.alturaSprite);*/
    
    image(this.imagem,-750, height-210,                           this.imagem.length-10, 170,
          width-2070, 0,
          this.imagem.length-648, 190);
    
        
  }
}