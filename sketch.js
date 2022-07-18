let rectw = 400, recth = 600
let rows = 15,
  cols = 10;
let xgap = rectw/cols,
  ygap = recth/rows;
let level = 0,
  lines = 0,
  score = 0;
let genos;

function preload() {
  genos = loadFont('assets/genos.ttf');
}

function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
  textFont(genos);
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

  // Text on side- level, lines, score, pause, quit, and next piece
  /* LEVEL: Increment by 1 for every 10 lines
  SCORE: One line cleared = 40 points.
  Four or more at once (tetris) = 1200 */
  textAlign(LEFT, TOP);
  fill(255);
  textSize(50);
  text(`LEVEL: ${level}`, width/2-630, height/2-300, 385, 200);
  text(`LINES: ${lines}`, width/2-630, height/2-50, 385, 200);
  text(`SCORE: ${score}`, width/2-630, height/2+200, 385, 200);

  text('NEXT PIECE', width/2+260, height/2-310, 385, 200);
  fill(150);
  strokeWeight(15);
  stroke(100);
  rect(width/2+260, height/2-245, 355, 200);

  rect(width/2+260, height/2, 355, 100);
  rect(width/2+260, height/2+145, 355, 100);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(70);
  text('PAUSE', width/2+437, height/2+35);
  text('QUIT', width/2+437, height/2+180);
  pop();
}
