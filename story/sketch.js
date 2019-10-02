var x = 100;
var y = 200;
var faceSize = 200;
var eyeSize = 50;
var c = 'green';

var greeting = '"I am the alien king! I shall conquer your galaxy!"';
var response = '"As a Space Cadet, I will stop you!"'


var alienx = 100;
var alieny = 200;

var story1 = "Somewhere in space, the Alien King and his nemesis Space Cadet collide!";







function setup() {
    createCanvas(windowWidth, 600);
    background('black');
    // first character Alien King
    fill(c);
    ellipse(x, y, faceSize, 270);

    //alien crown 

    fill('yellow');
    triangle(
        alienx - 50, alienx - 75,
        alienx, alieny - 50,
        alienx - 50, alieny - 25
    );

    triangle(
        alienx + 50, alienx - 75,
        alienx, alieny - 50,
        alienx - 50, alieny - 25
    );
    triangle(
        alienx + 100, alienx - 75,
        alienx, alieny - 50,
        alienx - 50, alieny - 25
    );
    triangle(
        alienx + 150, alienx - 75,
        alienx, alieny - 50,
        alienx - 50, alieny - 25
    );
    textSize(40);

    //alien eyes
    fill('black');
    ellipse(56, 190, 55, 100);
    ellipse(130, 190, 55, 100);





    fill(c);

    text(greeting, 225, 80);



    // second character Space Cadet
spacecadet(500,200,200,50,'"As a Space Cadet, I will stop you!"','white');

}

function draw() {

}


function alienking() {}

function spacecadet(x,y,faceSize,eyeSize,response,col) {
    
    fill(col);
    ellipse(x, y, faceSize);
    fill('blue');
    stroke('black');
    strokeWeight(5);

    //space cadet visor
    rect(x, y - 50, eyeSize, eyeSize); // left visor box
    rect(x + 50, y - 50, eyeSize, eyeSize); // right visor box

    fill('blue');
    noStroke();
    textAlign(CENTER);
    text(response, x, y + 100, faceSize * 2, faceSize);


    fill('orange');
    textAlign(CENTER);
    text(story1, width / 2, height - 50);


     
}
