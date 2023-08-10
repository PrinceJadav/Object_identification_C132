img = "";
  
  
function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();

  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function preload(){
 img = loadImage('HQ222.jpg')

}

function draw(){
  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  nofill();
  text("bottle, 45, 75");
  sroke("FF0000");
  rect(30, 60, 450, 350);

  
}

function gotResult()
{
  if (error) {
    console.log(error);
  }
  console.log(results);
}
