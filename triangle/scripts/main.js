console.log('Js Work');
let screenWidth = document.documentElement.clientWidth;
let screenHeight = document.documentElement.clientHeight;
let fullScreen = (e) => {
  e.remove();
  triangle(screenWidth, screenHeight);
}
function triangle(width, height) {
  let canvas = document.getElementById('triangle');
  canvas.width = width;
  canvas.height = height;
  let ctx = canvas.getContext('2d');
  let rnd = (n) => Math.floor(Math.random() * n);
  let checkXY = (n, point, x) => {
    switch (point) {
      case 1:
        if (x) { return (n == arrayOfPoint[0].x?checkXY(rnd(width), point, true):n) }
        else { return (n == arrayOfPoint[0].y?checkXY(rnd(height), point, false):n) };
        break;
      case 2:
        if (x && (n == arrayOfPoint[0].x || n == arrayOfPoint[1].x)) { return n = checkXY(rnd(width),point,true) }
        else { return n };
        if (!x && (n == arrayOfPoint[0].y || n == arrayOfPoint[1].y)) { return n = checkXY(rnd(height), point, false) }
        else { return n };
        break;
      default:
        break;
    }
  }
  class Point {
    constructor(x,y) {
      this.x = x;
      this.y = y;
    }
  }

  let arrayOfPoint = [];
  arrayOfPoint.push(new Point(rnd(width), rnd(height)));
  arrayOfPoint.push(new Point(checkXY(rnd(width), 1, true), checkXY(rnd(height), 1, false)));
  arrayOfPoint.push(new Point(checkXY(rnd(width), 2, true), checkXY(rnd(height), 2, false)));
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,width,height);

  ctx.fillStyle = 'pink';

  let draw = function(){
    let randomPointBasic = rnd(3);
    let randomPointAll = rnd(arrayOfPoint.length)
    let x = (arrayOfPoint[randomPointAll].x - arrayOfPoint[randomPointBasic].x)/2 + arrayOfPoint[randomPointBasic].x;
    let y = (arrayOfPoint[randomPointAll].y - arrayOfPoint[randomPointBasic].y)/2 + arrayOfPoint[randomPointBasic].y;

    ctx.fillRect(x, y, 1, 1);

    arrayOfPoint.push(new Point(x, y));
    window.requestAnimationFrame(draw);
  }
  draw();
}