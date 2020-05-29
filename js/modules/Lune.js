import {AbstractForm} from './AbstractForm.js';

class Lune extends AbstractForm {

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

    ctx.shadowBlur = 15;

    if (Math.round(Math.random()*3)==0) {
      ctx.shadowColor = 'red';
    } else {
      ctx.shadowColor = 'white';
    }

    ctx.arc(xDepart, yDepart, rayon, 0, Math.PI * 2, true);

    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
    let laLune = new Lune(window.innerWidth/2, window.innerHeight/6, 75, window.innerHeight, '#fffacd', '', 1, false);
    let forms = [laLune];
    return forms;
  }

}

export {Lune};