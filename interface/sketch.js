var num = 10;

function setup() {
    createCanvas(windowWidth, 600);
    background('plum');
    pattern();

    var button = createButton("Generate Pattern");
    button.mouseClicked(pattern);

    var saveButton = createButton("Save Image");
    saveButton.mouseClicked(saveImage);

    createP("Change Pattern");
    var numSlider = createSlider(2, 100, num);
    numSlider.input(getNum);
    
    nameInput = createInput("Name the file");
    
    
}

function getNum() {
    num = this.value();
    pattern();
}


for( let i = 0; i< num; i++){
    ellipse(random(width), random(height), random(50,100));
}

function saveImage() {
    save(nameInput.value()
}

function pattern() {
    background('plum');
    noStroke();
    fill('lightblue');

    for (let x = 0; x < width; x += 100) {
        ellipse(x, random(height), random(50, 100));
    }
}
