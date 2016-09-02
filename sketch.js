var img;
var image_x = 0;
var image_y = 1;
var number_img = 4;

var img_list =[];

var i = 0;

// How long until the next image
var next = 0;

function preload() {

  for (var i = 0; i<=number_img-1; i++){
    img_list[i] = loadImage("assets/cartoon"+i+".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 100, 200);

  //for (var i = 0; i<=3; i++){
  displayImage();
    if (millis() > next) {
      i++;
      if (i==number_img){
        i = 0;
      }

      next = millis() + 2000;
    }
  //}
}

function displayImage(){
  image(img_list[i], image_x, image_y);
  console.log(i);
}

