import {AbstractForm} from './AbstractForm.js';
import {ToolBox} from './ToolBox.js';

class Soleil extends AbstractForm {

  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 0, pesanteur = false) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur);
}

draw(ctx) {
    ctx.save();
    ctx.beginPath();


    ctx.fillStyle = this.fillColor;
    ctx.lineWidth = this.strokeWidth;

    let rayon = this.width;

    ctx.arc(this.x, this.y, rayon, 0, Math.PI * 2, true);

    ctx.globalAlpha = 0.1;
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 15;

    for (let i = 0; i < 6; i++) {
        ctx.arc(this.x, this.y, 25 + (rayon/2) * i, 0, Math.PI * 2, true);
        ctx.fill();
    }

    ctx.fill();
    ctx.closePath();
    ctx.restore();
}

static buildForms() {
    var workBox = new ToolBox();
    var color = workBox.randomColor();

    let leSoleil = new Soleil(window.innerWidth/2, window.innerHeight/10, 50, window.innerHeight, color, '', 1, false);
    let forms = [leSoleil];
    
    return forms;
}

}

export {Soleil};