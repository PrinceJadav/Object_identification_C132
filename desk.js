img = "";
  
  
function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();

  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function preload(){
 img = loadImage('desk.avif')

}

function draw(){
  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  nofill();
  text("Dog, 45, 75");
  sroke("FF0000");
  rect(30, 60, 450, 350);

  fill("#FF0000");
    text("Cat", 320, 120);
    nofill();
    rect(300, 90, 270, 320);
}

function gotResult()
{
  if (error) {
    console.log(error);
  }
  console.log(results);
}
