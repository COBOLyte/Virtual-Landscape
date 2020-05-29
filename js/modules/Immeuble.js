import {AbstractForm} from './AbstractForm.js';

class Immeuble extends AbstractForm {

  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 0, pesanteur = false, doorColor = '') {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur);
  }

  draw(ctx) {
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

    function buildDoor() {
      ctx.fillStyle = randomColor();
      let xDepartDoor = xDepart+(width/2.5);
      let yDepartDoor = yDepart;
      let doorWidth = width/5;
      let doorHeight = height/4;

      if ((height<-300) && (width<130)) {
        doorHeight+=18;
      }
      if ((height>-160) && (width>140)) {
        xDepartDoor+=2;
        doorWidth-=8;
        doorHeight-=18;
      }
      if ((height>-110) && (width<120)) {
        doorHeight-=8;
      }

      ctx.strokeRect(xDepartDoor, yDepartDoor, doorWidth, doorHeight);
      ctx.fillRect(xDepartDoor, yDepartDoor, doorWidth, doorHeight);
      ctx.strokeStyle = 'grey';
      ctx.lineWidth = 3;
      ctx.moveTo(xDepartDoor+5, yDepartDoor+(doorHeight/4));
      ctx.lineTo(xDepartDoor+5, yDepartDoor+(doorHeight/1.5));
      ctx.fillStyle = glassColor;
      ctx.fillRect(xDepartDoor+(doorWidth/3), yDepartDoor-2, doorWidth/1.9, doorHeight/1.15);
    }

    function buildDoubleDoor() {
      ctx.fillStyle = randomColor();
      let xDepartDoor = xDepart+(width/3);
      let yDepartDoor = yDepart;
      let doorWidth = width/2.65;
      let doorHeight = height/4;

      if ((height<-300) && (width<130)) {
        doorHeight+=18;
      }
      if ((height>-160) && (width>140)) {
        xDepartDoor+=2;
        doorWidth-=8;
        doorHeight-=18;
      }
      if ((height>-110) && (width<120)) {
        doorHeight-=8;
      }

      ctx.strokeRect(xDepartDoor, yDepartDoor, doorWidth, doorHeight);
      ctx.fillRect(xDepartDoor, yDepartDoor, doorWidth, doorHeight);
      ctx.moveTo(xDepartDoor+(doorWidth/2),yDepartDoor);
      ctx.lineTo(xDepartDoor+(doorWidth/2),yDepartDoor+(doorHeight));
      ctx.moveTo(xDepartDoor+(doorWidth/2.3), yDepartDoor+(doorHeight/4));
      ctx.lineTo(xDepartDoor+(doorWidth/2.3), yDepartDoor+(doorHeight/1.5));
      ctx.moveTo(xDepartDoor+(doorWidth/1.75), yDepartDoor+(doorHeight/4));
      ctx.lineTo(xDepartDoor+(doorWidth/1.75), yDepartDoor+(doorHeight/1.5));
      ctx.fillStyle = glassColor;
      ctx.fillRect(xDepartDoor+(doorWidth/1.55), yDepartDoor-2, doorWidth/3.5, doorHeight/1.15);
      ctx.fillRect(xDepartDoor+(doorWidth/2.75), yDepartDoor-2, -doorWidth/3.5, doorHeight/1.15);
    }

    function calculEspaceProportionHorizontal() {
      let widthFen = 0;
      let espaceProportionFen = 0;
      do {
        do {
          xDepartFen+=35;
          widthFen = xDepartFen+35;

        } while (xDepartFen+25<xDepart+width);
        espaceProportionFen = ((xDepart+width)-(widthFen-35))/2;
        yDepartFen+=35;
        xDepartFen = xDepart+10;

      } while (yDepartFen<Math.ceil(yDepart/1.15));
      yDepartFen = yDepart + (height+10);

      return espaceProportionFen;
    }

    function calculEspaceProportionVertical() {
      let heightFen = 0;
      let espaceProportionFen = 0;
      do {
        do {
          xDepartFen+=35;

        } while (xDepartFen+25<xDepart+width);
        yDepartFen+=35;
        heightFen = yDepartFen;
        espaceProportionFen = ((yDepart/1.28)-(heightFen-35))/2;
        xDepartFen = xDepart+10;

      } while (yDepartFen<yDepart/1.28);
      yDepartFen = yDepart + (height+10);

      return espaceProportionFen;
    }

    ctx.save();

    ctx.beginPath();
    let baseColor = randomColor();
    ctx.fillStyle = baseColor;
    ctx.lineWidth = this.strokeWidth;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    var xDepart = this.x;
    var yDepart = this.y;
    var width = this.width;
    var height = this.height;
    const glassColor = 'black';

    if (width<75) {
      width+=85;
    }
    if (height<80) {
      height-=100;
    }

    //Base//
    ctx.strokeStyle = 'black';
    ctx.strokeRect(xDepart, yDepart, width, height);
    ctx.fillRect(xDepart, yDepart, width, height);

    //Toit//
    if (height<=-280 && width<=150) {
      ctx.strokeRect(xDepart+(width/4),(yDepart+height)-1,width/2,height/10);
      ctx.fillRect(xDepart+(width/4),(yDepart+height)-1,width/2,height/10);
      ctx.fillRect(xDepart+(width/2.05),(yDepart+height)-110,width/20,80);
    }

    //Portes//
    if (Math.round(Math.random()) == 0) {
      buildDoor();
    } else {
      buildDoubleDoor();
    }

    //Fenêtres//
    let xDepartFen = xDepart+10;
    let yDepartFen = (yDepart-height)+30;
    let espaceProportionFenH = calculEspaceProportionHorizontal();
    let espaceProportionFenV = calculEspaceProportionVertical();

    ctx.shadowColor = 'yellow';

    do {
      do {
        if (Math.round(Math.random()*3)==0) {
          ctx.fillStyle = 'yellow';
          ctx.shadowBlur = 15;
        } else {
          ctx.fillStyle = 'black';
          ctx.shadowBlur = 0;
        }
        ctx.fillRect(xDepartFen+espaceProportionFenH, yDepartFen+espaceProportionFenV, 25, 25);
        xDepartFen+=35;

      } while (xDepartFen+25<xDepart+width);
      yDepartFen+=35;
      xDepartFen = xDepart+10;

    } while (yDepartFen<yDepart/1.28);
    yDepartFen = yDepart + (height+10);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
    const nbImmeubles = (Math.random()*20) + 10;
    let forms = [];
    for (let i=0;i<nbImmeubles; i++) {
      forms.push(new Immeuble(Math.random()*window.innerWidth, window.innerHeight/1.312, (Math.random()*window.innerWidth)/6, -((Math.random()*window.innerHeight)/2.5), '', '', 1, true));
    }
    return forms;
  }

}

export {Immeuble};