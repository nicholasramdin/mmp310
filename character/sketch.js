

//color values for character face
var r = 0;
var g = 166;
var b = 75;

var eyer = 0;
var eyeg = 0;
var eyeb = 0;

var pupilr = 255;
var pupilg = 225;
var pupilb = 255;

var eyeOffset = 50;

var pupilOffset = 50;


function setup() {
    createCanvas(windowWidth, 600);

    character();
    //face color sliders
    createP("Face red color").style('color', 'red');
    var redSlider = createSlider(0, 255, r);
    redSlider.input(updateRed);

    createP("Face blue color").style('color', 'blue');
    var blueSlider = createSlider(0, 255, b);
    blueSlider.input(updateBlue);

    createP("Face green color").style('color', 'green');
    var greenSlider = createSlider(0, 255, g);
    greenSlider.input(updateGreen);

    // eye slider

    createP('Eye offset').style('color', 'white');
    var eyeSlider = createSlider(10, 100, eyeOffset);
    eyeSlider.input(updateEyes);


    // eye color sliders


    createP("Eye red color").style('color', 'red');
    var eyerSlider = createSlider(0, 255, eyer);
    eyerSlider.input(updateEyer);

    createP("Eye green color").style('color', 'blue');
    var eyebSlider = createSlider(0, 255, eyeb);
    eyebSlider.input(updateEyeb);

    createP("Eye blue color").style('color', 'green');
    var eyegSlider = createSlider(0, 255, eyeg);
    eyegSlider.input(updateEyeg);
    ///


    createP('Pupil offset').style('color', 'white').position(width - 500, height - 550);
    var pupilSlider = createSlider(10, 100, pupilOffset).position(width - 500, height - 500);
    pupilSlider.input(updatePupils);


    // pupil color sliders

    createP("Pupil red color").style('color', 'red').position(width - 500, height - 450);
    var pupilrSlider = createSlider(0, 255, pupilr).position(width - 500, height - 400);
    pupilrSlider.input(updatePupilr);

    

    createP("Pupil green color").style('color', 'green').position(width - 500, height - 250);
    var pupilgSlider = createSlider(0, 255, pupilg).position(width - 500, height - 200);
    pupilgSlider.input(updatePupilg);
    
    createP("Pupil blue color").style('color', 'blue').position(width - 500, height - 350);
    var pupilbSlider = createSlider(0, 255, pupilb).position(width - 500, height - 300);
    pupilbSlider.input(updatePupilb);
}

function updateRed() {
    r = this.value();
    character();
}

function updateBlue() {
    b = this.value();
    character();
}

function updateGreen() {
    g = this.value();
    character();
}



function updateEyer() {
    eyer = this.value();
    character();
}

function updateEyeb() {
    eyeb = this.value();
    character();
}

function updateEyeg() {
    eyeg = this.value();
    character();
}


function updateEyes() {
    eyeOffset = this.value();
    character();


}

function updatePupils() {
    pupilOffset = this.value();
    character();


}

function updatePupilr() {
    pupilr = this.value();
    character();
}

function updatePupilb() {
    pupilb = this.value();
    character();
}

function updatePupilg() {
    pupilg = this.value();
    character();
}

function character() {
    background(51);
    fill(r, g, b);
    ellipse(width / 2, height / 2, 200, 300); //face

    stroke('black');
    strokeWeight(6);
    fill(eyer, eyeb, eyeg);
    ellipse(width / 2 - eyeOffset, height / 2 - 20, 20, 100); // left eye
    ellipse(width / 2 + eyeOffset, height / 2 - 20, 20, 100); // right eye 

    fill(pupilr, pupilg, pupilb);
    ellipse(width / 2 - pupilOffset, height / 2 - 20, 20, 50); // left pupil
    ellipse(width / 2 + pupilOffset, height / 2 - 20, 20, 50); // right pupil


}

function draw() {
    textAlign(CENTER);
    fill('orange');
    textSize(40);
    text('create your alien', width / 2, height - 50);

}
