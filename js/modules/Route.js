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

    var stripeColor = this.strokeColor;
    var roadColor = this.fillColor;

    function drawLignePave(yDepart) {
      var espaceLignePave = 0;
      for(var i=0;i<20;i++) {
        ctx.moveTo((window.innerWidth/20)+espaceLignePave, yDepart);
        ctx.lineTo((window.innerWidth/20)+espaceLignePave, yDepart-25);
        espaceLignePave+=75;
      }
    }

    //1er set de pavés//
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, window.innerHeight, window.innerWidth, -25);
    drawLignePave(window.innerHeight);

    //Route//
    ctx.fillStyle = roadColor;
    ctx.fillRect(0, window.innerHeight-25, window.innerWidth, -125);

    //Lignes de la route//
    ctx.fillStyle = stripeColor;
    let espaceTiret = 0;
    let debutTiret = Math.random() * window.innerWidth;
    
    for (let i=0; i<6;i++) {
      ctx.fillRect((debutTiret/50)+espaceTiret, window.innerHeight-90, 125, 25);
      espaceTiret+=250;
    }

    //2e set de pavés//
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, window.innerHeight/1.25, window.innerWidth, -25);
    drawLignePave(window.innerHeight/1.25);

    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
    var stripeColor = '';
    var roadColor = '';

    if (Math.round(Math.random()) == 0) {
      stripeColor = 'yellow';
      roadColor = '#101010';
    } else {
      stripeColor = 'white';
      roadColor = '#4c4c4c';
    }

    let forms = [new Route(0, 0,window.innerWidth, window.innerHeight, roadColor, stripeColor, 1, true)];

    return forms;
  }

}

export {Route};