import {AbstractForm} from './AbstractForm.js';

class Particule extends AbstractForm {

  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 0, pesanteur = false) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur);
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();

    ctx.lineWidth = this.strokeWidth;
    ctx.fillStyle = this.fillColor;

    let rayon = this.width;

    ctx.shadowColor = 'white';
    ctx.shadowBlur = 15;

    ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.globalAlpha = 0.18;
    ctx.arc(this.x, this.y, rayon/2, 0, Math.PI * 2, true);

    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
    let listColor = ['white','grey', 'black', 'red', 'green', 'purple', 'blue', 'pink', 'orange'];
    const numColor = Math.floor(Math.random()*listColor.length);
    let color = listColor[numColor];
    let nbParticules = (Math.random()*500)+250;
    let tailleParticules = 0;
    let forms = [];

    for(let i=0;i<nbParticules;i++) {
      tailleParticules = (Math.random()*3)+1;
      forms.push(new Particule(Math.random()*window.innerWidth, (Math.random()*window.innerHeight), tailleParticules, tailleParticules, color, '', 0, false));
    }
    
    return forms;
  }

}

export {Particule};