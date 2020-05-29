import {AbstractForm} from './AbstractForm.js';

class Comete extends AbstractForm {

  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 0, pesanteur = false) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur);
  }

  draw(ctx) {
    ctx.save();
    
    ctx.beginPath();

    ctx.fillStyle = this.fillColor;
    ctx.lineWidth = this.strokeWidth;
    let xDepart = this.x;
    let yDepart = this.y;
    let rayon = this.width;
    let espaceComete = 0;
    let sens = this.pesanteur;

    ctx.globalAlpha = 0.15;

    for (let i = 0; i < 125; i++) {
      for (let j = 0; j < 5; j++) {
        ctx.arc(xDepart, yDepart, (rayon/2)*j, 0, Math.PI * 2, true);
        ctx.fill();
      }
      espaceComete+=0.1;
      if (sens == true) {
        xDepart = xDepart + espaceComete;
      } else {
        xDepart = xDepart - espaceComete;
      }
      ctx.beginPath();
    }

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
    const nbCometes = Math.round(Math.random()*3);
    let sens = false;
    if (Math.round(Math.random())==0) {
      sens=true;
    }
    let forms = [];
    for (var i=0;i<nbCometes; i++) {
      forms.push(new Comete(Math.random()*window.innerWidth, Math.random()*window.innerHeight/3, 2.5, window.innerHeight, 'white', '', 10, sens));
    }
    return forms;
  }

}

export {Comete};