import {Immeuble} from './modules/Immeuble.js';
import {ArrierePlan} from './modules/ArrierePlan.js';
import {Route} from './modules/Route.js';
import {Ballon} from './modules/Ballon.js';
import {Lampadaire} from './modules/Lampadaire.js';
import {Soleil} from './modules/Soleil.js';
import {Palmier} from './modules/Palmier.js';
import {Ciel} from './modules/Ciel.js';
import {Etoile} from './modules/Etoile.js';
import {Lune} from './modules/Lune.js';
import {Montagne} from './modules/Montagne.js';
import {Sapin} from './modules/Sapin.js';
import {Nuage} from './modules/Nuage.js';
import {Comete} from './modules/Comete.js';
import {Particule} from './modules/Particule.js';
import {Neige} from './modules/Neige.js';

const c = document.getElementById('sceneryCanvas');
const ctx = c.getContext("2d");

var cwPrev = null;
var chPrev = null;
let forms = [];

function clearCanvas() {

  if(cwPrev) {
    ctx.clearRect(0, 0, cwPrev, chPrev);
  }

  const cw = c.width = window.innerWidth;
  const ch = c.height = window.innerHeight;
  cwPrev = cw;
  chPrev = ch;

}

function drawForms(forms) {
  clearCanvas();

  forms.forEach(forms => forms.draw(ctx));
}

function urbanScene() {
  forms = ArrierePlan.buildForms();
  forms = forms.concat(Soleil.buildForms());
  forms = forms.concat(Immeuble.buildForms());
  forms = forms.concat(Route.buildForms());
  forms = forms.concat(Lampadaire.buildForms());
  if (Math.round(Math.random())==0) {
    forms = forms.concat(Ballon.buildForms());
  }
  forms = forms.concat(Palmier.buildForms());
}

function rockyScene() {
  let snowAppear = false;
  if (Math.round(Math.random()*3)==0) {
    snowAppear = true;
  }

  forms = Ciel.buildForms();
  if (snowAppear == false) {
    forms = forms.concat(Etoile.buildForms());
  }
  if (Math.round(Math.random()*3)==0) {
    forms = forms.concat(Comete.buildForms());
  }
  forms = forms.concat(Lune.buildForms());
  forms = forms.concat(Nuage.buildForms());
  forms = forms.concat(Montagne.buildForms());
  forms = forms.concat(Sapin.buildForms());
  if (snowAppear == true) {
    if (Math.round(Math.random())==0) {
      forms = forms.concat(Particule.buildForms());
    } else {
      forms = forms.concat(Neige.buildForms());
    }
  }
}

function buildForms() {
  let numLand = Math.round(Math.random());
  if (numLand == 0) {
    urbanScene();
  } else {
    rockyScene();
  }
  return forms;
}

function chooseLand(whichLand) {
  if (whichLand === 'Rocky') {
    rockyScene();
  } else if (whichLand === 'Urban') {
    urbanScene();
  }
  return forms;
}

function drawThisForm(whichForm) {
  if (whichForm === 'Immeuble') {
    drawForms(Immeuble.buildForms())
  } else if (whichForm === 'Triangle') {
    drawForms(Ballon.buildForms())
  } else if (whichForm === 'AbstractForm') {
    drawForms(Palmier.buildForms())
  } else if (whichForm === 'Planete') {
    drawForms(Soleil.buildForms())
  }
}

function drawAllForms() {
  drawForms(buildForms());
}

function drawThisLand(whichLand) {
  chooseLand(whichLand);
  drawForms(chooseLand(whichLand));
}

document.drawForm = drawThisForm;
document.drawThisLand = drawThisLand;
document.drawAllForms = drawAllForms;
document.addEventListener('DOMContentLoaded', document.drawAllForms);