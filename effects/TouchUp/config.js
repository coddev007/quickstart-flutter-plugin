'use strict';

const makeup = require('./makeup.js');

Object.assign(globalThis, makeup.m);
/* Feel free to add your custom code below */

function TeethWhitening(strength){
    strength > 0 ?
    LipsCut.enable()
    :
    LipsCut.clear()

    Teeth.whitening(strength);
}