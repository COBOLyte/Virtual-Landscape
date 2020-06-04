import {AbstractForm} from './AbstractForm.js';
import {ToolBox} from './ToolBox.js';

class ArrierePlan extends AbstractForm {

  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 0, pesanteur = false) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur);
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();

    ctx.fillStyle = this.fillColor;
    ctx.lineWidth = this.strokeWidth;

    ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
    var workBox = new ToolBox();
    let color = workBox.randomColor();

    const forms = [new ArrierePlan(0, 0, window.innerWidth, window.innerHeight, color, '', 0, false)];
    
    return forms;
  }

}

export {ArrierePlan};