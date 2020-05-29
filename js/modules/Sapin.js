import {AbstractForm} from './AbstractForm.js';

class Sapin extends AbstractForm {

  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 0, pesanteur = false) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur);
  }

  draw(ctx) {
    ctx.save();
    
    ctx.beginPath();

    ctx.fillStyle = 'brown';
    ctx.lineWidth = this.strokeWidth;
    let xDepart = this.x;
    let yDepart = this.y;

    ctx.fillRect(xDepart-15, yDepart+210, 25,75);
    ctx.strokeRect(xDepart-15, yDepart+210, 25,75);

    ctx.fillStyle = this.fillColor;
    ctx.moveTo(xDepart, yDepart);
    ctx.lineTo(xDepart-15, yDepart+75);
    ctx.lineTo(xDepart-30, yDepart+35);
    ctx.lineTo(xDepart-20, yDepart+100);
    ctx.lineTo(xDepart-60, yDepart+50);
    ctx.lineTo(xDepart-25, yDepart+135);
    ctx.lineTo(xDepart-90, yDepart+90);
    ctx.lineTo(xDepart-30, yDepart+170);
    ctx.lineTo(xDepart-140, yDepart+130);
    ctx.lineTo(xDepart-35, yDepart+210);
    ctx.moveTo(xDepart, yDepart);
    ctx.lineTo(xDepart+15, yDepart+75);
    ctx.lineTo(xDepart+30, yDepart+35);
    ctx.lineTo(xDepart+20, yDepart+100);
    ctx.lineTo(xDepart+60, yDepart+50);
    ctx.lineTo(xDepart+25, yDepart+135);
    ctx.lineTo(xDepart+90, yDepart+90);
    ctx.lineTo(xDepart+30, yDepart+170);
    ctx.lineTo(xDepart+140, yDepart+130);
    ctx.lineTo(xDepart+35, yDepart+210);
    ctx.lineTo(xDepart-35, yDepart+210);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
    const nbSapins = (Math.random()*100) + 25;
    let forms = [];
    for (var i=0;i<nbSapins; i++) {
     forms.push(new Sapin(Math.random()*window.innerWidth, (i % 2 == 0) ? window.innerHeight/1.3 : window.innerHeight/1.4, 100, window.innerHeight, '#001900', '', 1.5, false));
   }
   return forms;
 }

}

export {Sapin};