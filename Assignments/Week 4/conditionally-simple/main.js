/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(){
  return ("That's a long string!")
}

function isItMedium(){
  return  ("Thats a regular sized string!")
}

function isItShort(){
  return  ("Thats a small string!")
}

function howLongIsMyString(){
  return  ("Thats a long string!")
}

function personsHeight(){
  return 
}


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}