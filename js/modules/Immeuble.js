import {AbstractForm} from './AbstractForm.js';
import {ToolBox} from './ToolBox.js';

class Immeuble extends AbstractForm {

  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 0, pesanteur = false, doorColor = '') {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur);
  }

  draw(ctx) {

    //Fonctions-début//
    function buildDoor() {
      ctx.fillStyle = porteColor;
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

      //Base//
      ctx.strokeRect(xDepartDoor, yDepartDoor, doorWidth, doorHeight);
      ctx.fillRect(xDepartDoor, yDepartDoor, doorWidth, doorHeight);

      //Poignée//
      ctx.strokeStyle = 'grey';
      ctx.lineWidth = 3;
      ctx.moveTo(xDepartDoor+5, yDepartDoor+(doorHeight/4));
      ctx.lineTo(xDepartDoor+5, yDepartDoor+(doorHeight/1.5));

      //Verre//
      ctx.fillStyle = 'black';
      ctx.fillRect(xDepartDoor+(doorWidth/3), yDepartDoor-2, doorWidth/1.9, doorHeight/1.15);
    }

    function buildDoubleDoor() {
      ctx.fillStyle = porteColor;
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

      //Base//
      ctx.strokeRect(xDepartDoor, yDepartDoor, doorWidth, doorHeight);
      ctx.fillRect(xDepartDoor, yDepartDoor, doorWidth, doorHeight);

      //Poignées//
      ctx.moveTo(xDepartDoor+(doorWidth/2),yDepartDoor);
      ctx.lineTo(xDepartDoor+(doorWidth/2),yDepartDoor+(doorHeight));
      ctx.moveTo(xDepartDoor+(doorWidth/2.3), yDepartDoor+(doorHeight/4));
      ctx.lineTo(xDepartDoor+(doorWidth/2.3), yDepartDoor+(doorHeight/1.5));
      ctx.moveTo(xDepartDoor+(doorWidth/1.75), yDepartDoor+(doorHeight/4));
      ctx.lineTo(xDepartDoor+(doorWidth/1.75), yDepartDoor+(doorHeight/1.5));

      //Verres//
      ctx.fillStyle = 'black';
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
    //Fonctions-fin//

    ctx.save();
    ctx.beginPath();

    ctx.lineWidth = this.strokeWidth;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    var workBox = new ToolBox();
    var xDepart = this.x;
    var yDepart = this.y;
    var width = this.width;
    var height = this.height;

    var batimentColor = this.fillColor;
    var porteColor = workBox.randomColor();
    var verreColor = this.strokeColor;

    if (width<75) {
      width+=85;
    }
    if (height<80) {
      height-=100;
    }

    //Base//
    ctx.fillStyle = batimentColor;
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
      if (Math.round(Math.random()*3)==0) {
        ctx.fillStyle = verreColor;
        ctx.shadowBlur = 15;
      } else {
        ctx.fillStyle = 'black';
        ctx.shadowBlur = 0;
      }
      buildDoor();
    } else {
      buildDoubleDoor();
    }

    //Fenêtres//
    let xDepartFen = xDepart+10;
    let yDepartFen = (yDepart-height)+30;
    let espaceProportionFenH = calculEspaceProportionHorizontal();
    let espaceProportionFenV = calculEspaceProportionVertical();

    ctx.shadowColor = verreColor;
    do {
      do {
        if (Math.round(Math.random()*3)==0) {
          ctx.fillStyle = verreColor;
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
    var workBox = new ToolBox();
    var verreColor = 'yellow';
    const nbImmeubles = (Math.random()*20) + 10;
    let forms = [];

    for (let i=0;i<nbImmeubles; i++) {
      var batimentColor = workBox.randomColor();
      forms.push(new Immeuble(Math.random()*window.innerWidth, window.innerHeight/1.312, (Math.random()*window.innerWidth)/6, -((Math.random()*window.innerHeight)/2.5), batimentColor, verreColor, 1, true));
    }
    
    return forms;
  }

}

export {Immeuble};