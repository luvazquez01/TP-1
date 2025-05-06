
let puntos = [];

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('canvas-container');
  noFill();
  strokeWeight(2);

  for (let i = 0; i < 10; i++) {
    puntos.push({
      x: random(width),
      y: random(height),
      r: random(20, 60)
    });
  }
}

function draw() {
  background('#fff3f2');

  for (let i = 0; i < puntos.length; i++) {
    let p1 = puntos[i];
    for (let j = i + 1; j < puntos.length; j++) {
      let p2 = puntos[j];
      stroke(lerpColor(color('#f5a09e'), color('#f7c6d9'), noise(i, j)));
      line(p1.x, p1.y, p2.x, p2.y);
    }
  }

  fill('#f5a09e');
  noStroke();
  ellipse(mouseX, mouseY, 20);
}
