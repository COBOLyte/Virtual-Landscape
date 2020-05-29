import {AbstractForm} from './AbstractForm.js';

class Nuage extends AbstractForm {

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
    let espaceNuage = 0;
    let sens = this.pesanteur;

    ctx.globalAlpha = 0.02;

    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 10; j++) {
        ctx.arc(xDepart, yDepart, (rayon/2)*j, 0, Math.PI * 2, true);
        ctx.fill();
      }
      espaceNuage+=0.5;
      if (sens == true) {
        xDepart = xDepart + espaceNuage;
      } else {
        xDepart = xDepart - espaceNuage;
      }
      ctx.beginPath();
    }

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
    const nbNuages = (Math.random()*30) + 15;
    let sens = false;
    let color = '';
    if (Math.round(Math.random()*3)==0) {
      color = 'white';
    } else {
      color = '#191919';
    }
    let forms = [];
    for (var i=0;i<nbNuages; i++) {
      if (Math.round(Math.random())==0) {
        sens=true;
      }
      forms.push(new Nuage(Math.random()*window.innerWidth, Math.random()*window.innerHeight/2, 10, window.innerHeight, color, '', 10, sens));
    }
    return forms;
  }

}

export {Nuage};