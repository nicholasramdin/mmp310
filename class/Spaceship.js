class Spaceship extends Thing {
	constructor() {
		super(width/2, height - 100, 100, 0, 0);
	}
	
	display() {
		fill('#3480eb');
		noStroke();
		//square(this.x, this.y, this.size);
        image(spaceshipSprite,this.x,this.y)
	}
	
	move() {
		if (keyIsDown(RIGHT_ARROW)) {
			this.speedX = 5;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.speedX = -5;
		} else {
			this.speedX = 0;
		}
		
		if (keyIsDown(DOWN_ARROW)) {
			this.speedY = 5;
		} else if (keyIsDown(UP_ARROW)) {
			this.speedY = -5;	
		} else {
			this.speedY = 0;	
		}
	}
}