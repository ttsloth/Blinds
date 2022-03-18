let gap = 20
let total = 60
let bird_sounds
let x = 0
let y = 100
let img

  
// function preload() {
//   bird_sounds = loadSound('Birds.mp3')
//   img = loadImage('airplane.png');
  
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  // test = createAudio('Birds.mp3');
}

function draw() {
  
  background(129,292,245)
    // background(0,0,100)

  
  // white ish
  c2 = color(164, 180, 186, 255);
  // black ish
  c1 = color(3,8,14, 255);
  
  // Opening
  if (mouseY <= height/2) {
    let inter2 = map(mouseY, 0, height/2, 0, 60);
    gap = inter2

    let inter3 = map(mouseY, 0, height/2, 0, 1);
    // test.volume(inter3);

    let c3 = lerpColor(c1, c2, inter3);
    c1 = c3
  } 
  
  // Closing
  if (mouseY > height/2) {
    let inter2 = map(mouseY, height, height/2, 0, 60);
    gap = inter2

    let inter3 = map(mouseY, height, height/2, 0, 1);
    // test.volume(inter3);
    
    let c3 = lerpColor(c1, c2, inter3);
    c1 = c3
  }  
  
  // airplane() 

  // Draw Blinds
  push()
    for(let k = 0; k < windowHeight/55; k++) {
      drawBlind()
      translate(0,55)
    }
  pop()
  
  strings()
  
  //test.loop();

  //topText()

}


function drawBlind() {
  if (mouseY <= height/2) {
    setGradient(0, gap/2, width, total - gap, c1, c2)
  } if (mouseY > height/2) {
    setGradient(0, gap/2, width, total - gap, c2, c1)
  }
}


function setGradient(x, y, w, h, c1, c2) {  
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    strokeWeight(2)
    line(x, i, x + w, i-20);
  }
}


function strings() {
  push()
    let inter41 = map(mouseY, 0, height, 100, height-100);
    translate(100,inter41)
    scale(0.6)
    knob()
  pop()
  
  push()
    let inter40 = map(mouseY, 0, height, height-100, 100);
    translate(50,inter40)
    scale(0.6)
    knob()
  pop()
  
  stroke(255)
  strokeWeight(4)
  line(65,0,65,inter40)
  line(115,0,115,inter41)
}


function knob() {
  fill(255,255,255)
  stroke(255,255,255)
  strokeWeight(1)
    
  beginShape()
  vertex(0, 0);
  vertex(50, 0);
  curveVertex(40,29)
  vertex(50, 100);
  vertex(0, 100);
  curveVertex(10,29)
  endShape(CLOSE)
}


function topText() {
  textFont('Georgia');
  strokeWeight(0)
  textSize(15)
  fill(0)
  text('Created by', 5, 20)
  text("Inspired by", 5, 40)
  text("Inspired by                                    piece", 5, 40)

  let a = createA('https://www.michaeldelaurier.com/', 'Michael DeLaurier');
  a.position(80, 5);

  let b = createA('https://www.newrafael.com/', "Rafaël Rozendaal's");
  b.position(85, 26);
  
  let c = createA('http://www.openthatwindow.com/', "open that window .com");
  c.position(250, 26);
}

function airplane() {
  push()
    scale(0.05)
    image(img, x*50, y*50);
  pop()
  
  x = x + 2;
  
  if (x > width*50) {
    x = 0;
  }
}