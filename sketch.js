
let distMouse = 15;
let cols;
let rows;
let blocks = [];
let offset = 4;
let size = 10;

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    angleMode(DEGREES);

    cols = width / size;
    rows = height / size;

    for (let i = 0; i < cols; i++) {
        blocks[i] = [];
        for (let j = 0; j < rows; j++) {
            blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
        }
    }

    b = new Block(width / 2, height / 2);
}

function draw() {
    background(0);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            blocks[i][j].move();
            blocks[i][j].display();
        }
    }

}