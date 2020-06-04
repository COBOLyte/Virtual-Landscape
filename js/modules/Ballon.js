import {AbstractForm} from './AbstractForm.js';
import {ToolBox} from './ToolBox.js';

class Ballon extends AbstractForm {

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
    let width = this.width;
    let height = this.height;

    ctx.moveTo(xDepart, yDepart);
    ctx.lineTo(xDepart, yDepart+50);
    
    ctx.moveTo(xDepart, yDepart);
    ctx.arcTo(xDepart+width, yDepart-height, xDepart-18.335, yDepart-width, 50);
    ctx.arcTo(xDepart-width, yDepart-height, xDepart, yDepart, 50);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
    var workBox = new ToolBox();
    let fillColor = workBox.randomColor();

    const leBallon = new Ballon(Math.random()*window.innerWidth, Math.random()*window.innerHeight/1.25, 100, 50, fillColor, '', 1, false);
    const forms = [leBallon];
    
    return forms;
  }

}

export {Ballon};