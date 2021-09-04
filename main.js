function preload() {

}

function setup() {
canvas = createCanvas(600, 400);
    canvas.position(250, 250);

    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
image(video, 0, 0, 500, 250);
  
  fill(252, 0, 194);
  stroke(0, 0, 0);
  circle(25,20,50);
  
  fill(7, 128, 0);
  stroke(0,0,0);
  rect( 45,15,450,15);

  fill(252, 0, 194);
  stroke(0, 0, 0);
  circle(500,20,50);

  fill(7, 128, 0);
  stroke(0,0,0);
  rect( 45,245,450,15);

  fill(252, 0, 194);
  stroke(0, 0, 0);
  circle(25,250,50);

  fill(7, 128, 0);
  stroke(0,0,0);
  rect( 20,43,15,180);

  fill(252, 0, 194);
  stroke(0, 0, 0);
  circle(500,250,50);

  fill(7, 128, 0);
  stroke(0,0,0);
  rect( 490,43,15,180);

}

function take_snapshot(){
  save('Myframeimage.png');
}