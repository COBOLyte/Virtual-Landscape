import {AbstractForm} from './AbstractForm.js';

class Soleil extends AbstractForm {

  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 0, pesanteur = false) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur);
}

draw(ctx) {
    ctx.save();
    
    ctx.beginPath();
    function randomColor() {
      let backColor = ['#'];
      for (let i=1; i<7; i++) {
        const colorCodeRepl = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let code = Math.random()*15;
        code = Math.round(code);
        backColor.push(colorCodeRepl[code]);
    }
    backColor = backColor.join('');
    return backColor;
}

ctx.fillStyle = randomColor();
ctx.lineWidth = this.strokeWidth;
let xDepart = this.x;
let yDepart = this.y;
let rayon = this.width;

ctx.arc(xDepart, yDepart, rayon, 0, Math.PI * 2, true);

ctx.globalAlpha = 0.1;

ctx.shadowColor = ctx.fillStyle;
ctx.shadowBlur = 15;

for (let i = 0; i < 6; i++) {
    ctx.arc(xDepart, yDepart, 25 + (rayon/2) * i, 0, Math.PI * 2, true);
    ctx.fill();
}

ctx.fill();
ctx.closePath();
ctx.restore();
}

static buildForms() {
    let leSoleil = new Soleil(window.innerWidth/2, window.innerHeight/10, 50, window.innerHeight, '', '', 1, false);
    let forms = [leSoleil];
    return forms;
}

}

export {Soleil};