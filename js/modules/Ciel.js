import {AbstractForm} from './AbstractForm.js';

class Ciel extends AbstractForm {

  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 0, pesanteur = false) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur);
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();

    ctx.lineWidth = this.strokeWidth;
    ctx.fillStyle = this.fillColor;

    ctx.fillRect(this.x, this.y, this.width, this.height);
    
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
    let listColor = ['#191970','#4c0000'];
    const numColor = Math.floor(Math.random()*listColor.length);
    let color = listColor[numColor];

    let forms = [new Ciel(0, 0, window.innerWidth, window.innerHeight, color, '', 0, false)];
    
    return forms;
  }

}

export {Ciel};