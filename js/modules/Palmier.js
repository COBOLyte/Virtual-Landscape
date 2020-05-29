import {AbstractForm} from './AbstractForm.js';

class Palmier extends AbstractForm {

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
    let height = this.height;

    ctx.lineWidth = 2;
    ctx.fillRect(xDepart,yDepart, 50, -20);
    ctx.moveTo(xDepart+15,yDepart-15);
    ctx.lineTo(xDepart+20.5,yDepart-height);
    ctx.lineTo(xDepart+30,yDepart-height);
    ctx.lineTo(xDepart+35,yDepart-12);
    ctx.moveTo(xDepart+25,yDepart-height);
    ctx.bezierCurveTo(xDepart+18,yDepart-(height+65), xDepart-50,yDepart-height, xDepart-80,yDepart-(height-50));
    ctx.moveTo(xDepart+25,yDepart-height);
    ctx.bezierCurveTo(xDepart+18,yDepart-(height+65), xDepart+80,yDepart-height, xDepart+80,yDepart-(height-50));
    ctx.moveTo(xDepart+25,yDepart-height);
    ctx.bezierCurveTo(xDepart+40,yDepart-(height+70), xDepart,yDepart-(height+70), xDepart-50,yDepart-(height+20));
    ctx.moveTo(xDepart+25,yDepart-height);
    ctx.bezierCurveTo(xDepart+20,yDepart-(height+100), xDepart+105,yDepart-(height+20), xDepart+105,yDepart-(height+20));

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

static buildForms() {
    const nbPalm = (Math.random()*6) + 2;
    var planBas = window.innerHeight/1.01;
    var planHaut = window.innerHeight/1.28;
    let palmHeight = 0;
    if (Math.round(Math.random()) == 0) {
        palmHeight = window.innerHeight/3;
    } else {
        palmHeight = window.innerHeight/2.5;
    }
    let forms = [];
    for (var i=0;i<nbPalm; i++) {
        forms.push(new Palmier(Math.random()*window.innerWidth, (i % 2 == 0) ? planBas : planHaut, window.innerWidth, palmHeight, 'black', '', 1, true));
    }
    return forms;
}

}

export {Palmier};