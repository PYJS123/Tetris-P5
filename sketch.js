let rectw = 400, recth = 600
let rows = 15,
  cols = 10;
let xgap = rectw/cols,
  ygap = recth/rows;

function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
}

function draw() {
  background(50);
  drawMain();
}

function drawMain() {
  push();
  noStroke();
  fill(150);
  rectMode(CENTER);
  rect(width/2, height/2, rectw, recth);
  strokeWeight(15);
  stroke(100);
  noFill();
  rect(width/2, height/2, rectw+15, recth+15);
  strokeWeight(1);
  for (let i = 0; i < cols; i++) {
    let x = width/2 - rectw/2 + xgap*i;
    let y = height/2 - recth/2;
    line(x, y, x, y+recth);
  }
  for (let i = 0; i < rows; i++) {
    let x = width/2 - rectw/2;
    let y = height/2 - recth/2 + ygap*i;
    line(x, y, x+rectw, y);
  }

  rectMode(CORNER);
  noStroke();
  fill(30);
  rect(width/2-230, height/2-315, -415, 630);
  rect(width/2+230, height/2-315, 415, 630);
  pop();
}
