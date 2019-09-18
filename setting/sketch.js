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


// three scenes, space, asteroidbelt, titan

var scene = "space";
var scene = "earthdestroyed";
var scene = "titan";


function mousePressed() {
    if (scene == "space") {
        scene = "earthdestroyed";
    } else if (scene == "earthdestroyed") {
        scene = "titan";
    } else if (scene == "titan") {
        scene = "space";
    }
}

function setup() {
    createCanvas(windowWidth, 600);
}


function draw() {
    // set the setting
    if (scene == "space") {
        background('black');
        stroke('black');

        /* space scene */
        fill('white');
        for (let x = 0; x < width; x += 100) {
            let y = random(height);
            ellipse(x + 100, y, 20);
            fill('white');
            ellipse(x + 100, y, 10);
        }
    }
    // asteroid belt scene
    if (scene == "earthdestroyed") {
        background("red");



        fill('gray');
        stroke('black');

        for (let x = 0; x < width; x += 50) {
            triangle(
                x, 100 + random(200),
                x + 50, 600,
                x - 50, 600
            );
        }
        fill('gold');
        circle(width - 100, 100, 100);

    }
    //titan scene
    else if (scene == "titan") {
        background("purple");


        stroke('black');
        
        for (let x = 0; x < width; x += 100) {
            let y = random(height);
            fill('green');
            beginShape();
            curveVertex(x - 100, y + 100);
            curveVertex(x, y);
            curveVertex(x + 100, y);
            curveVertex(x + 100, y + 50);
            curveVertex(x, y);
            curveVertex(x - 100, y);
            endShape();

            ellipse(x + 100, y, 20);
            fill('white');
            ellipse(x + 100, y, 10);
        }
    }




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

    text(greeting, 550, 80);



    // second character Space Cadet

    fill('white');
    ellipse(400, 200, faceSize);
    fill('blue');
    stroke('black');
    strokeWeight(5);

    //space cadet visor
    rect(x + 200, y - 50, eyeSize, eyeSize); // left visor box
    rect(x + 250, y - 50, eyeSize, eyeSize); // right visor box

    fill('blue');
    noStroke();
    textAlign(CENTER);
    text(response, 580, 350);


    fill('orange');
    textAlign(CENTER);
    text(story1, width / 2, height - 95);

    fill('white');
    textAlign(CENTER);
    text("Click to go to the next scene.", width / 2, height - 20);

}
