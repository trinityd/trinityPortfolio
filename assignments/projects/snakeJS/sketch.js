var s;
var scl = 10;
var food;
var score = "";

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  s = new Snake();
  addFood();
}

function draw() {
  background(255);
  noFill();
  rect(0,0,width-1,height-1);
  fill(0);
  score = "Score: " + s.total;
  text(score, 340, 20);
  if (s.pause == -1) s.update();
  s.show();
  s.touchingBodyCheck();

  if (s.eat(food)) {
    addFood();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function mousePressed() {
  if (s.pause == -1) {
    s.total++;
  }
}

function addFood() {
  food = createVector(floor(random(width/scl))*scl, floor(random((height/scl)))*scl);
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    s.dir(0,-1);
  }
  else if (keyCode == DOWN_ARROW) {
    s.dir(0,1);
  }
  else if (keyCode == RIGHT_ARROW) {
    s.dir(1,0);
  }
  else if (keyCode == LEFT_ARROW) {
    s.dir(-1,0);
  }
  else if (keyCode == SHIFT) {
    s.setPause();
  }
}
