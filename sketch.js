let detailY;
function setup() {
  createCanvas(500, 500, WEBGL);
  detailY = createSlider(2, 24, 6);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
}

function draw() {
  background(0,247,255);
  rotateY(millis() / 1000);
  ellipsoid(30, 40, 100, 60, detailY.value());
}
