let blocks = [];
let graphics;
let letters = "ꯀ 	ꯁꯂꯃꯄꯅꯆꯇꯈꯉꯊꯋꯌꯍꯎꯏꯐꯑꯒꯓꯔꯕꯖꯗꯘꯙꯚꯛꯜꯝꯞꯟꯠꯡꯢ";
let counter = 0;
let char;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	graphics = createGraphics(width, height);
	matter.init();
	platform = matter.makeBarrier(width / 2, height, width, 100);

}

function generateTextObject(x, y, d) {
	tSize = random(d / 4, d);
	textSize(tSize);
	textFont("serif");
	char = letters.substr(counter++%letters.length, 1).toUpperCase();
	let b = matter.makeSign(char, x, y);
	b.textSize = tSize;
	blocks.push(b);
}

function mousePressed() {
	generateTextObject(mouseX, mouseY, random(width / 10));
}

function draw() {
	clear();

	fill(0);
	noStroke();
	platform.show();

	if (frameCount % 10 == 0) {
		let d = random(width/10,width / 5);
		let x = random(d/2,width-d/2);
		let y = random(d/2,height / 8-d/2);
		generateTextObject(x, y, d);
	}



	for (let i = blocks.length - 1; i >= 0; i--) {
		let b = blocks[i];
		// print(b);
		let p = b.body.position;
		push();
		translate(p.x, p.y, 0);
		rotate(b.body.angle);
		fill(0, 0, 0);
		textAlign(CENTER, CENTER);
		textStyle(BOLD);
		textSize(b.textSize);
		text(b.text, 0, 0);
		pop();
		if (b.isOffCanvas()) {
			matter.forget(b);
			blocks.splice(i, 1);
		}
	}
	push();
	let g = get();
	clear();
	background(43, 58, 100);
	image(graphics, 0, 0);
	drawingContext.shadowColor = color(0, 0, 0, 33);
	drawingContext.shadowBlur = width / 40;
	drawingContext.shadowOffsetX = width / 100;
	drawingContext.shadowOffsetY = width / 50;
	image(g, 0, 0);
	pop();
}