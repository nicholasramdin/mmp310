var story1 = "The calvary arrives to assist Space Cadet!";


// three scenes, space, asteroidbelt, titan

var scene = "space";


function mouseClicked(){
    drawCharacters();
}

function drawCharacters() {
	background('black');
	
	for (let x = 0; x < width; x += 100) {
		
		var r = random(255);
		var g = random(200,);
		var b = random(100);
		
		var s = random(20, 60); // size 
		var y = random(height/3, height * 2/3);
		
		fill(r, g, b);
		ellipse(x, y, 100); // face
		
        fill("blue");
		rect(x + s/2, y - 20, s, s/2); // right eye
		rect(x - s/2, y - 20, s, s/2); // left eye
        
 fill('orange');
    textAlign(CENTER);
        textSize(40);
    text(story1, width / 2, height - 95);
        
        

}
	}




function setup() {
    createCanvas(windowWidth, 600);
    drawCharacters();
}




