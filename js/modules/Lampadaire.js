import {AbstractForm} from './AbstractForm.js';

class Lampadaire extends AbstractForm {

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
    let width = this.height;
    let rayon = this.width;

    ctx.lineWidth = 3.5;
    
    ctx.arc(xDepart, yDepart, 15, 0, 3.15, true);

    ctx.moveTo(xDepart,yDepart);
    ctx.lineCap = 'butt';
    ctx.lineTo(xDepart,yDepart-width);
    ctx.moveTo(xDepart,yDepart-25);

    ctx.moveTo(xDepart-30,yDepart-(width-15));
    ctx.lineTo(xDepart+30,yDepart-(width-15));
    ctx.moveTo(xDepart+15,yDepart-width);
    ctx.lineTo(xDepart-15, yDepart-width);
    ctx.lineTo(xDepart-17.5, yDepart-(width+25));
    ctx.lineTo(xDepart-10, yDepart-(width+25*2));
    ctx.lineTo(xDepart+10.5, yDepart-(width+25*2));
    ctx.lineTo(xDepart+17.5, yDepart-(width+25));
    ctx.lineTo(xDepart+15, yDepart-width);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

static buildForms() {
    const nbLamp = (Math.random()*3) + 2;
    let planBas = window.innerHeight/1.01;
    let planHaut = window.innerHeight/1.28;
    let lampHeight = 0;

    if (Math.round(Math.random()) == 0) {
        lampHeight = window.innerHeight/4;
    } else {
        lampHeight = window.innerHeight/3.5;
    }

    let forms = [];

    for (let i=0;i<nbLamp; i++) {
      forms.push(new Lampadaire(Math.random()*window.innerWidth, (i % 2 == 0) ? planBas : planHaut, 50, lampHeight, 'black', '', 1, true));
  }
  
  return forms;
}

}

export {Lampadaire};