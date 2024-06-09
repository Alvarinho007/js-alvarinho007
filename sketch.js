function setup() {
    createCanvas(600, 600);
  background("blue");
  }
  
  function draw() {
    stroke("yellow");
    fill("green");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
    
  }