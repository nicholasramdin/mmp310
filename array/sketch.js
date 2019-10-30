var sizes = [100, 80, 120, 90, 100, 110];
var position = [0, 10, -10, 20, -20, 0];
var speed = [0.5, 0.2, 0.5, 0.1, 1.5, 0.6]


function setup() {
	createCanvas(640, 360);
}
function draw() {
	background(51);
	noStroke();
	
	for (let i = 0; i < sizes.length; i++) {
		spaceCadet(50 + i * 100, 100, sizes[i]);
        
        sizes[i] += speed[i];
        
        
	}
}

function spaceCadet(x,y,s){

    
fill('white');
	ellipse(x, y, s, s - 25);
    
    stroke('black');
    fill('blue');
    rect(x - 10, y - 20, s/4, s/4); // left visor box
    rect(x + 10 , y - 20, s/4, s/4); // right visor box
    	
}