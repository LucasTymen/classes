/*
Code Challenges
Coding question

Complete the shape-area.js module. Your module must declare and export two functions with the following signatures:

    circleArea(radiusLength).
    squareArea(sideLength).

You may create these as either named functions or anonymous function expressions.
*/

/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
let radiusLength = ('number')
let sideLength = ('number')

module.exports.circleArea = circleArea;
module.exports.calcRectArea = calcRectArea;
module.exports.squareArea = squareArea;

function circleArea(radiusLength) {
    console.log(`circleArea : `)
  return PI * radiusLength * radiusLength;
}

function calcRectArea(width, height) {
    console.log(`calcRectArea : `)
  return width * height;
}

function squareArea(sideLength) {
  console.log(`squareArea : `)
  return sideLength * sideLength;
}

console.log(squareArea(5));
console.log('#################');
console.log(calcRectArea(12,43));
console.log('#################');
console.log(circleArea(54))
