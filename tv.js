img = "";
  
  
function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
}

function preload(){
 img = loadImage('tv_ac.jpg')

}

function draw(){
  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  nofill();
  text("tv, 45, 75");
  sroke("FF0000");
  rect(30, 60, 450, 350);

  fill("#FF0000");
    text("ac", 320, 120);
    nofill();
    rect(300, 90, 270, 320);
}

