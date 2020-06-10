import {ArrierePlan} from './modules/ArrierePlan.js';
import {Ballon} from './modules/Ballon.js';
import {Ciel} from './modules/Ciel.js';
import {Comete} from './modules/Comete.js';
import {Etoile} from './modules/Etoile.js';
import {Immeuble} from './modules/Immeuble.js';
import {Lampadaire} from './modules/Lampadaire.js';
import {Lune} from './modules/Lune.js';
import {Montagne} from './modules/Montagne.js';
import {Neige} from './modules/Neige.js';
import {Nuage} from './modules/Nuage.js';
import {Palmier} from './modules/Palmier.js';
import {Particule} from './modules/Particule.js';
import {Route} from './modules/Route.js';
import {Sapin} from './modules/Sapin.js';
import {Soleil} from './modules/Soleil.js';

const c = document.getElementById('sceneryCanvas');
const ctx = c.getContext("2d");

var cwPrev = null;
var chPrev = null;

function clearCanvas() {

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
  let forms = [];
  forms = ArrierePlan.buildForms();
  forms = forms.concat(Soleil.buildForms());
  forms = forms.concat(Immeuble.buildForms());
  forms = forms.concat(Route.buildForms());
  forms = forms.concat(Lampadaire.buildForms());

  if (Math.round(Math.random())==0) {
    forms = forms.concat(Ballon.buildForms());
  }

  forms = forms.concat(Palmier.buildForms());

  return forms;
}

function rockyScene() {
  let forms = [];
  let snowDisplay = false;

  if (Math.round(Math.random()*3)==0) {
    snowDisplay = true;
  }

  forms = Ciel.buildForms();

  if (snowDisplay == false) {
    forms = forms.concat(Etoile.buildForms());
  }

  if (Math.round(Math.random()*3)==0) {
    forms = forms.concat(Comete.buildForms());
  }

  forms = forms.concat(Lune.buildForms());
  forms = forms.concat(Nuage.buildForms());
  forms = forms.concat(Montagne.buildForms());
  forms = forms.concat(Sapin.buildForms());
  
  if (snowDisplay == true) {
    if (Math.round(Math.random())==0) {
      forms = forms.concat(Particule.buildForms());
    } else {
      forms = forms.concat(Neige.buildForms());
    }
  }
  return forms;
}

function buildForms() {
  let numLand = Math.round(Math.random());
  let forms = null;
  if (numLand == 0) {
    forms = urbanScene();
  } else {
    forms = rockyScene();
  }
  return forms;
}

function chooseLand(whichLand) {
  let forms = null;
  if (whichLand === 'Rocky') {
    forms = rockyScene();
  } else if (whichLand === 'Urban') {
    forms = urbanScene();
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
  drawForms(chooseLand(whichLand));
}

document.drawForm = drawThisForm;
document.drawThisLand = drawThisLand;
document.drawAllForms = drawAllForms;
document.addEventListener('DOMContentLoaded', document.drawAllForms);