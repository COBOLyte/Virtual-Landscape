import {AbstractForm} from './AbstractForm.js';

class Route extends AbstractForm {

  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 0, pesanteur = false) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur);
  }

  draw(ctx) {
    ctx.save();

    ctx.beginPath();
    ctx.fillStyle = this.fillColor;
    ctx.lineWidth = this.strokeWidth;

    function drawLignePave(yDepart) {
      var espaceLignePave = 0;
      for(var i=0;i<20;i++) {
        ctx.moveTo((window.innerWidth/20)+espaceLignePave, yDepart);
        ctx.lineTo((window.innerWidth/20)+espaceLignePave, yDepart-25);
        espaceLignePave+=75;
      }
    }

    if (Math.round(Math.random()) == 0) {
      var stripeColor = 'yellow';
      var roadColor = '#101010';
    } else {
      stripeColor = 'white';
      roadColor = '#4c4c4c';
    }

    ctx.fillStyle = 'grey';
    ctx.fillRect(0, window.innerHeight, window.innerWidth, -25);
    drawLignePave(window.innerHeight);

    ctx.fillStyle = roadColor;
    ctx.fillRect(0, window.innerHeight-25, window.innerWidth, -125);

    ctx.fillStyle = stripeColor;
    let espaceTiret = 0;
    let debutTiret = Math.random() * window.innerWidth;
    for (let i=0; i<6;i++) {
      ctx.fillRect((debutTiret/50)+espaceTiret, window.innerHeight-90, 125, 25);
      espaceTiret+=250;
    }

    ctx.fillStyle = 'grey';
    ctx.fillRect(0, window.innerHeight/1.25, window.innerWidth, -25);
    drawLignePave(window.innerHeight/1.25);

    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
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

    let fillColor = randomColor();
    const routeObj = new Route(0, 0,window.innerWidth, window.innerHeight, '', '', 1, true);
    const forms = [routeObj];
    return forms;
  }

}

export {Route};