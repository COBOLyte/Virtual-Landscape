import {AbstractForm} from './AbstractForm.js';

class Montagne extends AbstractForm {

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
    let width = this.width;

    let ptSommet = width;
    let ptHauteur = 0;
    let montee = 0;
    let niveauActuel = 0;
    let descentNiv = 0;

    let nbNiveau = Math.ceil(Math.random()*3);
    if (nbNiveau == 0) {
        nbNiveau+=1;
    }

    if (nbNiveau == 3) {
        niveauActuel = 2.25;
        descentNiv = 100;
    } else if (nbNiveau == 2) {
        niveauActuel = 2;
        descentNiv = 225;
    } else {
        niveauActuel = 1.75;
        descentNiv = 350;
    }

    for(let i=0;i<nbNiveau;i++) {
        ctx.moveTo(0,yDepart/niveauActuel);
        ctx.lineTo(0,yDepart);
        ctx.lineTo(width,yDepart);
        ctx.lineTo(width,yDepart/niveauActuel);

        do {
            montee = (Math.random()*10)+3
            ptHauteur = (Math.random()*yDepart/montee)+descentNiv;
            ctx.lineTo(ptSommet,ptHauteur);
            ptSommet = ptSommet - Math.random()*30;
            montee=0;
        } while (ptSommet>0);
        
        ctx.lineTo(0,yDepart/niveauActuel);

        ptSommet = width;
        ptHauteur = 0;
        montee = 0;
        niveauActuel-=0.25
        descentNiv+=125;
    }

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

static buildForms() {
    let listColor = ['#1e1e1e','#140d00', '#0a000a', '#140000', '#000200', '#141400', '#0f0003', '#000014'];
    const numColor = Math.floor(Math.random()*listColor.length);
    let color = listColor[numColor];

    let laMontagne = new Montagne(0, window.innerHeight, window.innerWidth, window.innerHeight, color, '', 1, false);
    let forms = [laMontagne];
    
    return forms;
}

}

export {Montagne};