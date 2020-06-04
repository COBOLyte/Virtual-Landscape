import {AbstractForm} from './AbstractForm.js';

class Etoile extends AbstractForm {

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
    let nbEtoiles = (Math.random()*500)+250;
    let forms = [];

    for(let i=0;i<nbEtoiles;i++) {
      let tailleEtoile = (Math.random()*3)+1;
      forms.push(new Etoile(Math.random()*window.innerWidth, (Math.random()*window.innerHeight), tailleEtoile, tailleEtoile, '#fff', '', 0, false));
    }

    return forms;
  }

}

export {Etoile};