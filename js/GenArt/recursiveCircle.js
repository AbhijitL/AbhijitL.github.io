function setup() {
    var canvas = createCanvas(400, 400);
    canvas.position(windowWidth-600,40);
    rectMode(CENTER);
  }
  
  function draw() {
    translate(width/2,height/2);
    frameRate();
    noFill();
    background(200,0);
    recurCircle(0,0,200);
    noLoop();
  }
  
  function recurCircle(x,y,d){
    fill(random(1,200),random(1,200),random(1,200),random(0,244));
    //rotate(radians(frameCount)); 
    circle(x,y,d);
    if(d>60){
      recurCircle(x+d/2,y,d/2);
      recurCircle(x-d/2,y,d/2); 
      recurCircle(x,y+d/2,d/2);
      recurCircle(x,y-d/2,d/2);
    }
    
  }
  