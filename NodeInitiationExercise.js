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
